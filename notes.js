document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('new-note');
    const notesList = document.getElementById('notes');

    function loadNotes() {
        const stored = localStorage.getItem('notes');
        const notes = stored ? JSON.parse(stored) : [];
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${note.title}</strong><p>${note.content}</p>`;
            notesList.appendChild(li);
        });
    }

    function saveNote(title, content) {
        const stored = localStorage.getItem('notes');
        const notes = stored ? JSON.parse(stored) : [];
        notes.push({ title, content });
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();
        if (title && content) {
            saveNote(title, content);
            form.reset();
        }
    });

    loadNotes();

    // Add wave transition on page load
    const wave = document.createElement('div');
    wave.className = 'wave-transition';
    document.body.appendChild(wave);
    setTimeout(() => {
        wave.remove();
    }, 1500);
});