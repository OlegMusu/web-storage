const formEl = document.getElementById("contactForm");
const contactsContainer = document.getElementById("contactsContainer");

const contactsList = []

function onSubmit(e) {
    e.preventDefault();

    const newContact = {
        firstName: formEl.El.firstName.value,
        lastName: formEl.lastName.value,
        phoneNumber: formEl.phoneNumber.value,
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
    })
};

formEl.addEventListener("submit", onSubmit);