document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-priority');
    const list = document.getElementById('priorities');

    let chart;

    function loadPriorities() {
        const stored = localStorage.getItem('priorities');
        const items = stored ? JSON.parse(stored) : [];
        list.innerHTML = '';
        items.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = `${item.text} (${item.time}h)`;
            li.style.backgroundColor = importanceColor(item.importance);
            list.appendChild(li);
        });
        updateChart(items);
    }

    function importanceColor(level) {
        switch (level) {
            case 'high': return '#FF6B6B'; // red
            case 'medium': return '#FFD1DC';
            case 'low': return '#FFF9C4';
            default: return '#ffffff';
        }
    }

    function updateChart(items) {
        const ctx = document.getElementById('chartCanvas').getContext('2d');
        const labels = items.map((_, idx) => `Item ${idx + 1}`);
        const data = items.map(item => item.time);
        const bgColors = items.map(item => importanceColor(item.importance));

        if (chart) {
            chart.data.labels = labels;
            chart.data.datasets[0].data = data;
            chart.data.datasets[0].backgroundColor = bgColors;
            chart.update();
        } else {
            chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels,
                    datasets: [{
                        label: 'Hours',
                        data,
                        backgroundColor: bgColors,
                        borderColor: '#FF69B4',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
        }
    }

    function savePriority(text, importance, time) {
        const stored = localStorage.getItem('priorities');
        const items = stored ? JSON.parse(stored) : [];
        items.push({ text, importance, time });
        localStorage.setItem('priorities', JSON.stringify(items));
        loadPriorities();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('priority-text');
        const importanceEl = document.getElementById('importance');
        const timeEl = document.getElementById('time-estimate');
        const text = input.value.trim();
        const importance = importanceEl.value;
        const time = parseFloat(timeEl.value);
        if (text && importance && !isNaN(time)) {
            savePriority(text, importance, time);
            input.value = '';
            importanceEl.selectedIndex = 0;
            timeEl.value = '';
        }
    });

    loadPriorities();
});