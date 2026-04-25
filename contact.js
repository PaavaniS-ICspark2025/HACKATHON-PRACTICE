document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-contact');
    const contactsList = document.getElementById('contacts');
    const profileId = sessionStorage.getItem('workNotesActiveProfileId') || 'default';
    const contactsKey = `savedContacts::${profileId}`;

    if (!form || !contactsList) {
        return;
    }

    function getContacts() {
        const stored = localStorage.getItem(contactsKey);
        return stored ? JSON.parse(stored) : [];
    }

    function setContacts(contacts) {
        localStorage.setItem(contactsKey, JSON.stringify(contacts));
    }

    function deleteContact(id) {
        const contacts = getContacts().filter((contact) => contact.id !== id);
        setContacts(contacts);
        renderContacts();
    }

    function renderContacts() {
        const contacts = getContacts();
        contactsList.innerHTML = '';

        if (contacts.length === 0) {
            const empty = document.createElement('li');
            empty.textContent = 'No contacts saved yet.';
            contactsList.appendChild(empty);
            return;
        }

        contacts.forEach((contact) => {
            const li = document.createElement('li');

            const name = document.createElement('strong');
            name.textContent = contact.name;
            li.appendChild(name);

            if (contact.email) {
                const email = document.createElement('p');
                email.textContent = `Email: ${contact.email}`;
                li.appendChild(email);
            }

            if (contact.phone) {
                const phone = document.createElement('p');
                phone.textContent = `Phone: ${contact.phone}`;
                li.appendChild(phone);
            }

            if (contact.notes) {
                const notes = document.createElement('p');
                notes.textContent = `Notes: ${contact.notes}`;
                li.appendChild(notes);
            }

            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                deleteContact(contact.id);
            });
            li.appendChild(deleteBtn);

            contactsList.appendChild(li);
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const phoneInput = document.getElementById('contact-phone');
        const notesInput = document.getElementById('contact-notes');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const notes = notesInput.value.trim();

        if (!name) {
            return;
        }

        const contacts = getContacts();
        contacts.push({
            id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
            name,
            email,
            phone,
            notes
        });

        setContacts(contacts);
        form.reset();
        renderContacts();
    });

    renderContacts();
});
