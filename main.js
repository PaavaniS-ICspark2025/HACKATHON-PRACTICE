document.addEventListener('DOMContentLoaded', () => {
    const quickText = document.getElementById('quick-text');
    if (quickText) {
        // load saved quick note
        const stored = localStorage.getItem('quickNote') || '';
        quickText.value = stored;
        quickText.addEventListener('input', () => {
            localStorage.setItem('quickNote', quickText.value);
        });
    }
});