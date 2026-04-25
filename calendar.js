document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('calendar-title');
    const grid = document.getElementById('calendar-grid');
    const prevButton = document.getElementById('calendar-prev');
    const nextButton = document.getElementById('calendar-next');

    if (!title || !grid || !prevButton || !nextButton) {
        return;
    }

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    let current = new Date(today.getFullYear(), today.getMonth(), 1);

    function buildDayCell(label, className = '') {
        const cell = document.createElement('div');
        cell.className = `calendar-cell ${className}`.trim();
        cell.textContent = label;
        return cell;
    }

    function renderCalendar() {
        grid.innerHTML = '';

        const year = current.getFullYear();
        const month = current.getMonth();
        title.textContent = current.toLocaleDateString(undefined, {
            month: 'long',
            year: 'numeric'
        });

        weekDays.forEach((day) => {
            grid.appendChild(buildDayCell(day, 'calendar-weekday'));
        });

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i += 1) {
            grid.appendChild(buildDayCell('', 'calendar-empty'));
        }

        for (let day = 1; day <= daysInMonth; day += 1) {
            const isToday = year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
            grid.appendChild(buildDayCell(String(day), isToday ? 'calendar-today' : ''));
        }
    }

    prevButton.addEventListener('click', () => {
        current = new Date(current.getFullYear(), current.getMonth() - 1, 1);
        renderCalendar();
    });

    nextButton.addEventListener('click', () => {
        current = new Date(current.getFullYear(), current.getMonth() + 1, 1);
        renderCalendar();
    });

    renderCalendar();
});
