document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('calendar-title');
    const grid = document.getElementById('calendar-grid');
    const prevButton = document.getElementById('calendar-prev');
    const nextButton = document.getElementById('calendar-next');
    const form = document.getElementById('calendar-event-form');
    const dateInput = document.getElementById('calendar-event-date');
    const whatInput = document.getElementById('calendar-event-what');
    const whenInput = document.getElementById('calendar-event-when');
    const whereInput = document.getElementById('calendar-event-where');
    const urgencyInput = document.getElementById('calendar-event-urgency');
    const saveButton = document.getElementById('calendar-event-save');
    const cancelButton = document.getElementById('calendar-event-cancel');
    const deleteButton = document.getElementById('calendar-event-delete');
    const status = document.getElementById('calendar-event-status');

    if (!title || !grid || !prevButton || !nextButton || !form || !dateInput || !whatInput || !whenInput || !whereInput || !urgencyInput || !saveButton || !cancelButton || !deleteButton || !status) {
        return;
    }

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    let current = new Date(today.getFullYear(), today.getMonth(), 1);
    let editingEventId = null;
    let selectedDateKey = '';
    const storageKey = typeof window.getScopedStorageKey === 'function'
        ? window.getScopedStorageKey('calendarPlans')
        : 'calendarPlans::default';

    function toDateKey(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function toDisplayDate(dateKey) {
        const [year, month, day] = dateKey.split('-').map((value) => Number(value));
        if (!year || !month || !day) {
            return dateKey;
        }

        return new Date(year, month - 1, day).toLocaleDateString(undefined, {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    function readPlans() {
        const stored = localStorage.getItem(storageKey);
        if (!stored) {
            return [];
        }

        try {
            const parsed = JSON.parse(stored);
            if (!Array.isArray(parsed)) {
                return [];
            }

            return parsed.filter((plan) => plan
                && typeof plan.id === 'string'
                && typeof plan.date === 'string'
                && /^\d{4}-\d{2}-\d{2}$/.test(plan.date)
                && typeof plan.what === 'string'
                && typeof plan.when === 'string'
                && typeof plan.where === 'string'
                && typeof plan.urgency === 'string');
        } catch {
            return [];
        }
    }

    function savePlans(plans) {
        const sorted = [...plans].sort((a, b) => a.date.localeCompare(b.date));
        localStorage.setItem(storageKey, JSON.stringify(sorted));
    }

    function setStatus(message, isError = false) {
        status.textContent = message;
        status.classList.toggle('is-error', isError);
    }

    function clearFields() {
        whatInput.value = '';
        whenInput.value = '';
        whereInput.value = '';
        urgencyInput.value = '';
    }

    function resetForm() {
        editingEventId = null;
        clearFields();
        const fallbackDate = selectedDateKey || toDateKey(today);
        dateInput.value = fallbackDate;
        saveButton.textContent = `Save Plan for ${toDisplayDate(fallbackDate)}`;
        cancelButton.hidden = true;
        deleteButton.hidden = true;
    }

    function startEdit(plan) {
        editingEventId = plan.id;
        dateInput.value = plan.date;
        whatInput.value = plan.what;
        whenInput.value = plan.when;
        whereInput.value = plan.where;
        urgencyInput.value = plan.urgency;
        saveButton.textContent = `Update ${toDisplayDate(plan.date)}`;
        cancelButton.hidden = false;
        deleteButton.hidden = false;
        setStatus(`Editing plan for ${toDisplayDate(plan.date)}.`);
        whatInput.focus();
    }

    function findPlanByDate(dateKey) {
        return readPlans().find((plan) => plan.date === dateKey) || null;
    }

    function loadDatePlan(dateKey) {
        selectedDateKey = dateKey;
        renderCalendar();
        const existing = findPlanByDate(dateKey);

        if (existing) {
            startEdit(existing);
            return;
        }

        resetForm();
        setStatus(`No plan yet for ${toDisplayDate(dateKey)}. Add details and save.`);
    }

    function deletePlanById(id) {
        const plans = readPlans().filter((plan) => plan.id !== id);
        savePlans(plans);
        resetForm();
        renderCalendar();
        setStatus(`Deleted plan for ${toDisplayDate(selectedDateKey)}.`);
    }

    function buildDayCell(label, className = '', dateKey = '') {
        const cell = document.createElement('div');
        cell.className = `calendar-cell ${className}`.trim();

        if (className.includes('calendar-weekday') || className.includes('calendar-empty')) {
            cell.textContent = label;
            return cell;
        }

        const dayLabel = document.createElement('span');
        dayLabel.className = 'calendar-day-number';
        dayLabel.textContent = label;
        cell.appendChild(dayLabel);

        if (dateKey) {
            const dayPlan = findPlanByDate(dateKey);
            if (dayPlan) {
                const marker = document.createElement('span');
                const markerClass = dayPlan.urgency === 'critical'
                    ? 'urgency-critical'
                    : dayPlan.urgency === 'high'
                        ? 'urgency-high'
                        : dayPlan.urgency === 'low'
                            ? 'urgency-low'
                            : 'urgency-medium';
                marker.className = `calendar-day-marker ${markerClass}`;
                marker.textContent = 'Plan';
                cell.appendChild(marker);
            }

            cell.classList.add('calendar-clickable');
            if (dateKey === selectedDateKey) {
                cell.classList.add('calendar-selected');
            }
            cell.setAttribute('role', 'button');
            cell.setAttribute('tabindex', '0');
            cell.setAttribute('aria-label', `Select ${toDisplayDate(dateKey)}`);
            cell.addEventListener('click', () => {
                loadDatePlan(dateKey);
            });
            cell.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    loadDatePlan(dateKey);
                }
            });
        }

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
            const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            grid.appendChild(buildDayCell(String(day), isToday ? 'calendar-today' : '', dateKey));
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

    cancelButton.addEventListener('click', () => {
        resetForm();
        setStatus('Edit canceled.');
    });

    deleteButton.addEventListener('click', () => {
        if (!editingEventId) {
            return;
        }
        deletePlanById(editingEventId);
    });

    dateInput.addEventListener('change', () => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateInput.value)) {
            loadDatePlan(dateInput.value);
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const plan = {
            date: dateInput.value,
            what: whatInput.value.trim(),
            when: whenInput.value.trim(),
            where: whereInput.value.trim(),
            urgency: urgencyInput.value
        };

        const validUrgencies = new Set(['low', 'medium', 'high', 'critical']);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(plan.date)) {
            setStatus('Please select a valid date.', true);
            return;
        }

        if (!plan.what || !plan.when || !plan.where) {
            setStatus('Please fill in what, when, and where.', true);
            return;
        }

        if (!validUrgencies.has(plan.urgency)) {
            setStatus('Please select urgency/priority.', true);
            return;
        }

        const plans = readPlans();
        const existingForDateIndex = plans.findIndex((entry) => entry.date === plan.date);

        if (editingEventId) {
            const index = plans.findIndex((entry) => entry.id === editingEventId);
            if (index === -1) {
                resetForm();
                renderCalendar();
                setStatus('That plan no longer exists.', true);
                return;
            }

            plans[index] = {
                ...plans[index],
                ...plan,
                updatedAt: new Date().toISOString()
            };

            if (existingForDateIndex !== -1 && existingForDateIndex !== index) {
                plans.splice(existingForDateIndex, 1);
            }

            savePlans(plans);
            const updatedFor = plans[index].date;
            renderCalendar();
            loadDatePlan(updatedFor);
            setStatus(`Updated plan for ${toDisplayDate(updatedFor)}.`);
            return;
        }

        if (existingForDateIndex !== -1) {
            plans[existingForDateIndex] = {
                ...plans[existingForDateIndex],
                ...plan,
                updatedAt: new Date().toISOString()
            };

            savePlans(plans);
            renderCalendar();
            loadDatePlan(plan.date);
            setStatus(`Updated existing plan for ${toDisplayDate(plan.date)}.`);
            return;
        }

        plans.push({
            id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
            ...plan,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });

        savePlans(plans);
        const savedFor = plan.date;
        renderCalendar();
        loadDatePlan(savedFor);
        setStatus(`Saved plan for ${toDisplayDate(savedFor)}.`);
    });

    selectedDateKey = toDateKey(today);
    resetForm();
    renderCalendar();
    loadDatePlan(selectedDateKey);
});
