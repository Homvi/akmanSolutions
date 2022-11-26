//handle form submit
let nameInput = document.getElementById("contactName")
let emailInput = document.getElementById("contactEmail")
let messageInput = document.getElementById("contactMessage")
let sendMessageBtn = document.getElementById("submitBtn")
let privacyCheckBox = document.getElementById("privacyPolicy")

let isNameFilled = false;
let isMessageFilled = false;
let isEmailFilled = false;
let isPrivacyChecked = false;

sendMessageBtn.type = "button"

const checkIfName = () => {

    if (nameInput.value.length == 0) {
        nameInput.style.border = "1px solid #cd5c5c"
        isNameFilled = false
    }

    if (nameInput.value.length !== 0) {
        nameInput.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
        isNameFilled = true
    }

    if (isNameFilled && isMessageFilled && isEmailFilled && isPrivacyChecked) {
        sendMessageBtn.classList.remove("disabled")
        sendMessageBtn.type = "submit"
    }
}

const checkIfEmail = () => {
    if (emailInput.value.length == 0) {
        emailInput.style.border = "1px solid #cd5c5c"
        isEmailFilled = false;
    }
    if (emailInput.value.length !== 0) {
        emailInput.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
        isEmailFilled = true;
    }
    if (isNameFilled && isMessageFilled && isEmailFilled && isPrivacyChecked) {
        sendMessageBtn.classList.remove("disabled")
        sendMessageBtn.type = "submit"
    }
}

const checkIfMessage = () => {
    if (messageInput.value.length == 0) {
        messageInput.style.border = "1px solid #cd5c5c"
        isMessageFilled = false;
    }
    if (messageInput.value.length !== 0) {
        messageInput.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
        isMessageFilled = true;
    }
    if (isNameFilled && isMessageFilled && isEmailFilled && isPrivacyChecked) {
        sendMessageBtn.classList.remove("disabled")
        sendMessageBtn.type = "submit"
    }
}

const checkIfPrivacyChecked = () => {
    if (privacyCheckBox.checked === false) {
        privacyPolicyText.style.color = "#cd5c5c"
        isPrivacyChecked = false;
    }
    if (privacyCheckBox.checked === true) {
        privacyPolicyText.style.color = "rgba(255, 255, 255, 0.55)"
        isPrivacyChecked = true;
    }
    if (isNameFilled && isMessageFilled && isEmailFilled && isPrivacyChecked) {
        sendMessageBtn.classList.remove("disabled")
        sendMessageBtn.type = "submit"
    }
}

const checkAllField = () => {
    checkIfName();
    checkIfEmail();
    checkIfMessage();
    checkIfPrivacyChecked();
    if (isNameFilled && isMessageFilled && isEmailFilled && isPrivacyChecked) {
        sendMessageBtn.classList.remove("disabled")
        sendMessageBtn.type = "submit"
        return true
    }
    else {
        sendMessageBtn.classList.add("disabled")
        sendMessageBtn.type = "button"
        return false
    }
}


nameInput.addEventListener("change", function () {
    checkIfName();
    checkAllField()
})

emailInput.addEventListener("change", function () {
    checkIfEmail();
    checkAllField()
})

messageInput.addEventListener("change", function () {
    checkIfEmail();
    checkAllField()
})

privacyCheckBox.addEventListener("change", function () {
    checkIfPrivacyChecked();
    checkAllField()
})


sendMessageBtn.addEventListener("mouseover", function () {
    checkAllField()
})
