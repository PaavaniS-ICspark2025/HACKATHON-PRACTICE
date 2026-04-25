document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-priority');
    const list = document.getElementById('priorities');
    const testAlarmBtn = document.getElementById('test-alarm-btn');
    const profileId = sessionStorage.getItem('workNotesActiveProfileId') || 'default';
    const prioritiesKey = `priorities::${profileId}`;
    const alarmSoundKey = `alarmSound::${profileId}`;

    let chart;
    let audioContext;
    const activeTimers = [];

    function initAudioContext() {
        if (audioContext) {
            return audioContext;
        }

        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) {
            return null;
        }

        audioContext = new AudioContextClass();
        return audioContext;
    }

    function unlockAudioContext() {
        const ctx = initAudioContext();
        if (!ctx) {
            return;
        }

        if (ctx.state === 'suspended') {
            ctx.resume().catch(() => {});
        }
    }

    function getSelectedAlarmSound() {
        return localStorage.getItem(alarmSoundKey) || 'classic';
    }

    function getTonePattern(soundName) {
        switch (soundName) {
            case 'bell':
                return {
                    type: 'sine',
                    tones: [880, 1174.66, 880],
                    step: 0.33,
                    length: 0.3,
                    gain: 0.22
                };
            case 'digital':
                return {
                    type: 'square',
                    tones: [1046.5, 1567.98, 1174.66],
                    step: 0.2,
                    length: 0.12,
                    gain: 0.2
                };
            case 'urgent':
                return {
                    type: 'sawtooth',
                    tones: [740, 932.33, 740, 932.33, 740],
                    step: 0.16,
                    length: 0.13,
                    gain: 0.2
                };
            case 'calm':
                return {
                    type: 'triangle',
                    tones: [392, 440, 523.25],
                    step: 0.34,
                    length: 0.28,
                    gain: 0.18
                };
            case 'chime':
                return {
                    type: 'triangle',
                    tones: [523.25, 659.25, 783.99],
                    step: 0.28,
                    length: 0.26,
                    gain: 0.24
                };
            case 'pulse':
                return {
                    type: 'sawtooth',
                    tones: [740, 740, 587, 740],
                    step: 0.22,
                    length: 0.16,
                    gain: 0.18
                };
            default:
                return {
                    type: 'square',
                    tones: [880, 660, 880],
                    step: 0.35,
                    length: 0.25,
                    gain: 0.34
                };
        }
    }

    function playAlarmSound() {
        const ctx = initAudioContext();
        if (!ctx) {
            return Promise.resolve(false);
        }

        const pattern = getTonePattern(getSelectedAlarmSound());

        const startPlayback = () => {
            const startTime = ctx.currentTime + 0.02;

            pattern.tones.forEach((frequency, index) => {
                const oscillator = ctx.createOscillator();
                const gainNode = ctx.createGain();
                const toneStart = startTime + (index * pattern.step);
                const toneEnd = toneStart + pattern.length;

                oscillator.type = pattern.type;
                oscillator.frequency.setValueAtTime(frequency, toneStart);
                gainNode.gain.setValueAtTime(0.0001, toneStart);
                gainNode.gain.exponentialRampToValueAtTime(pattern.gain, toneStart + 0.02);
                gainNode.gain.exponentialRampToValueAtTime(0.0001, toneEnd);

                oscillator.connect(gainNode);
                gainNode.connect(ctx.destination);

                oscillator.start(toneStart);
                oscillator.stop(toneEnd);
            });

            return true;
        };

        if (ctx.state === 'suspended') {
            return ctx.resume()
                .then(() => startPlayback())
                .catch(() => false);
        }

        return Promise.resolve(startPlayback());
    }

    function getPriorities() {
        const stored = localStorage.getItem(prioritiesKey);
        return stored ? JSON.parse(stored) : [];
    }

    function setPriorities(items) {
        localStorage.setItem(prioritiesKey, JSON.stringify(items));
    }

    function getLegacyDurationMs(item) {
        if (typeof item.time !== 'number') {
            return 0;
        }

        if (item.timeUnit === 'minutes') {
            return item.time * 60 * 1000;
        }

        // Older entries were stored in hours.
        return item.time * 60 * 60 * 1000;
    }

    function getMinutesRemaining(item) {
        if (item.dueAt) {
            return Math.max(0, Math.ceil((item.dueAt - Date.now()) / 60000));
        }

        if (!item.createdAt) {
            return 0;
        }

        const legacyDueAt = item.createdAt + getLegacyDurationMs(item);
        return Math.max(0, Math.ceil((legacyDueAt - Date.now()) / 60000));
    }

    function getPriorityDueAt(item) {
        if (item.dueAt) {
            return item.dueAt;
        }

        if (!item.createdAt) {
            return null;
        }

        const legacyDurationMs = getLegacyDurationMs(item);
        return legacyDurationMs ? (item.createdAt + legacyDurationMs) : null;
    }

    function getChartLabel(text, index) {
        const clean = (text || '').trim();
        if (!clean) {
            return `Priority ${index + 1}`;
        }

        if (clean.length <= 24) {
            return `${index + 1}. ${clean}`;
        }

        return `${index + 1}. ${clean.slice(0, 24)}...`;
    }

    function importanceLabel(level) {
        switch (level) {
            case 'high': return 'High Priority';
            case 'medium': return 'Medium Priority';
            case 'low': return 'Low Priority';
            default: return 'Priority';
        }
    }

    function importanceAccentColor(level) {
        switch (level) {
            case 'high': return '#D64545';
            case 'medium': return '#D98AA4';
            case 'low': return '#B5A63F';
            default: return '#7A8794';
        }
    }

    function formatDateTime(timestamp) {
        return new Date(timestamp).toLocaleString();
    }

    function markPriorityAlerted(dueAt) {
        const items = getPriorities();
        const match = items.find((item) => item.dueAt === dueAt && !item.alerted);
        if (!match) {
            return;
        }

        match.alerted = true;
        setPriorities(items);
    }

    function alertPriorityTimeUp(item) {
        markPriorityAlerted(item.dueAt);
        playAlarmSound().then((didPlay) => {
            // Let the first tone begin before opening the blocking alert dialog.
            const alertDelay = didPlay ? 140 : 0;
            setTimeout(() => {
                window.alert(`Time is up for priority: ${item.text}`);
            }, alertDelay);
        });
    }

    function schedulePriorityAlerts(items) {
        activeTimers.forEach((timerId) => clearTimeout(timerId));
        activeTimers.length = 0;

        const now = Date.now();
        let changed = false;

        items.forEach((item) => {
            if (item.alerted) {
                return;
            }

            if (!item.createdAt) {
                item.createdAt = now;
                changed = true;
            }

            if (!item.dueAt) {
                const legacyDurationMs = getLegacyDurationMs(item);
                if (!legacyDurationMs) {
                    return;
                }

                item.dueAt = item.createdAt + legacyDurationMs;
                changed = true;
            }

            const delay = item.dueAt - now;
            if (delay <= 0) {
                alertPriorityTimeUp(item);
                return;
            }

            const timerId = setTimeout(() => {
                alertPriorityTimeUp(item);
            }, delay);
            activeTimers.push(timerId);
        });

        if (changed) {
            setPriorities(items);
        }
    }

    function loadPriorities() {
        const items = getPriorities();
        list.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            const dueAt = getPriorityDueAt(item);

            const meta = document.createElement('span');
            meta.className = 'priority-meta';
            meta.textContent = importanceLabel(item.importance);
            li.appendChild(meta);

            const title = document.createElement('strong');
            title.textContent = item.text;

            li.appendChild(title);
            if (item.description) {
                const desc = document.createElement('p');
                desc.textContent = item.description;
                li.appendChild(desc);
            }

            if (dueAt) {
                const dueText = document.createElement('p');
                dueText.textContent = `Due: ${formatDateTime(dueAt)}`;
                li.appendChild(dueText);
            }

            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.textContent = 'Delete';
            deleteBtn.setAttribute('aria-label', `Delete priority ${item.text}`);
            deleteBtn.addEventListener('click', () => {
                deletePriority(index);
            });
            li.appendChild(deleteBtn);

            li.style.backgroundColor = '';
            li.style.borderLeft = `5px solid ${importanceAccentColor(item.importance)}`;
            list.appendChild(li);
        });
        updateChart(items);
        schedulePriorityAlerts(items);
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
        const organized = items
            .map((item) => ({
                text: item.text,
                importance: item.importance,
                dueAt: getPriorityDueAt(item),
                minutesRemaining: getMinutesRemaining(item)
            }))
            .sort((a, b) => {
                if (a.dueAt === null && b.dueAt === null) {
                    return 0;
                }

                if (a.dueAt === null) {
                    return 1;
                }

                if (b.dueAt === null) {
                    return -1;
                }

                return a.dueAt - b.dueAt;
            });

        const hasData = organized.length > 0;
        const labels = hasData
            ? organized.map((item, index) => getChartLabel(item.text, index))
            : ['No priorities'];
        const data = hasData ? organized.map((item) => item.minutesRemaining) : [0];
        const dueTimes = hasData ? organized.map((item) => item.dueAt) : [null];
        const bgColors = hasData
            ? organized.map((item) => importanceColor(item.importance))
            : ['#d0d7de'];

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: 'Minutes Remaining',
                    data,
                    backgroundColor: bgColors,
                    borderColor: '#5a6e84',
                    borderWidth: 1,
                    borderRadius: 6,
                    barThickness: 20
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 350
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: hasData ? 'Priorities Sorted by Nearest Deadline' : 'Priorities',
                        color: '#2E4057'
                    },
                    tooltip: {
                        enabled: hasData,
                        callbacks: {
                            label(context) {
                                return `${context.parsed.x} min remaining`;
                            },
                            afterLabel(context) {
                                const dueAt = dueTimes[context.dataIndex];
                                return dueAt ? `Due: ${formatDateTime(dueAt)}` : 'Due: Not set';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Minutes Remaining'
                        },
                        ticks: {
                            precision: 0
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    function savePriority(text, description, importance, dueAt) {
        const items = getPriorities();
        const createdAt = Date.now();
        items.push({
            text,
            description,
            importance,
            createdAt,
            dueAt,
            alerted: false
        });
        setPriorities(items);
        loadPriorities();
    }

    function deletePriority(index) {
        const items = getPriorities();
        items.splice(index, 1);
        setPriorities(items);
        loadPriorities();
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('priority-text');
        const descriptionEl = document.getElementById('priority-description');
        const importanceEl = document.getElementById('importance');
        const finishByEl = document.getElementById('finish-by');
        const text = input.value.trim();
        const description = descriptionEl.value.trim();
        const importance = importanceEl.value;
        const dueAt = new Date(finishByEl.value).getTime();
        if (text && importance && !isNaN(dueAt)) {
            if (dueAt <= Date.now()) {
                window.alert('Please choose a future date and time.');
                return;
            }

            savePriority(text, description, importance, dueAt);
            input.value = '';
            descriptionEl.value = '';
            importanceEl.selectedIndex = 0;
            finishByEl.value = '';
        }
    });

    if (testAlarmBtn) {
        testAlarmBtn.addEventListener('click', () => {
            unlockAudioContext();
            playAlarmSound().then((didPlay) => {
                if (!didPlay) {
                    window.alert('Could not play the alarm sound on this browser.');
                }
            });
        });
    }

    document.addEventListener('click', unlockAudioContext, { once: true });
    document.addEventListener('keydown', unlockAudioContext, { once: true });
    document.addEventListener('touchstart', unlockAudioContext, { once: true });

    loadPriorities();
});