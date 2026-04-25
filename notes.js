document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('new-note');
    const notesList = document.getElementById('notes');
    const profileId = sessionStorage.getItem('workNotesActiveProfileId') || 'default';
    const notesKey = `notes::${profileId}`;

    function loadNotes() {
        const stored = localStorage.getItem(notesKey);
        const notes = stored ? JSON.parse(stored) : [];
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${note.title}</strong><p>${note.content}</p>`;
            notesList.appendChild(li);
        });
    }

    function saveNote(title, content) {
        const stored = localStorage.getItem(notesKey);
        const notes = stored ? JSON.parse(stored) : [];
        notes.push({ title, content });
        localStorage.setItem(notesKey, JSON.stringify(notes));
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
});