// const settings = {
//     theme: "dark",
//     isAuthenticated: true,
//     option: [1, 2, 3],
// };

// console.log(settings)
// const settingsStringify = JSON.stringify(settings);
// console.log("settingsStringify", typeof settingsStringify)
// localStorage.setItem("theme", settingsStringify);

// const savedTheme = localStorage.getItem("theme");
// const parsedTheme = JSON.parse(savedTheme);
// console.log("savedTheme", typeof savedTheme)

// localStorage.removeItem("theme");

const formInput = document.querySelector('#feedback-message')
const form = document.querySelector('#feedback-form')

function onSubmitFeedback(event) {
    event.preventDefault()
    formInput.value = ''
}

function onTextareaInput(event) {
    const value = event.target.value
    localStorage.setItem("feedBack-msg", value)
}

function populateTextarea() {
    const savedMsg = localStorage.getItem("feedBack-msg")
    if (savedMsg) {
        formInput.value = savedMsg;  
    }
    
}

populateTextarea()

formInput.addEventListener('input', onTextareaInput)
form.addEventListener('submit', onSubmitFeedback)