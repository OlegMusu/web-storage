const formEl = document.getElementById("contactForm");
const contactsContainer = document.getElementById("contactsContainer");

let contactsList = JSON.parse(localStorage.getItem("contacts")) || [];

function onSubmit(e) {
    e.preventDefault();

    const newContact = {
        firstName: formEl.firstName.value,
        lastName: formEl.lastName.value,
        phoneNumber: formEl.phone.value,
        email: formEl.email.value
    };

    contactsList.push(newContact)

    saveContacts();

    formEl.reset()
};


function saveContacts() {
    localStorage.setItem("contacts", JSON.stringify(contactsList));
};

function renderContacts() {
    contactsContainer.onbeforematch((contact) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <p>${contact.firstName}</p>
        <p>${contact.lastName}</p>
        <p>${contact.phone}</p>
        <p>${contact.email}</p>
        `;
        contactsContainer.appendChild(div);
    })
};

formEl.addEventListener("submit", onSubmit);