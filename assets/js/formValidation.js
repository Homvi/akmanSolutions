
//show tax-nuber input if the eployer worked in germany in the past
let taxInput = document.getElementById("taxInput")

let workedCheckbox = document.getElementById("workedAbroad")
let notWorkedCheckbox = document.getElementById("notWorkedAbroad")

const checkIfWorkedInGermany = () => {
    if(workedCheckbox.checked){
        taxInput.classList.remove("hidden")
    }
    if(notWorkedCheckbox.checked){
        taxInput.classList.add("hidden")
    }
}

//handle form submit

let contactForm = document.getElementById("apllication-form")
let privacyCheckBox = document.getElementById("privacyPolicy")
let sendMessageBtn = document.getElementById("sendMessageBtn")
let privacyPolicyText = document.getElementById("privacyPolicyText")
let nameField = document.getElementById("name")
let emailField = document.getElementById("email")

let isNameFilled = false;
let isEmailFilled = false;
let isPrivacyChecked = false;

const checkIfName = () => {
	if(nameField.value.length == 0){
		nameField.style.border = "1px solid #cd5c5c"
		isNameFilled = false
	}
	if(nameField.value.length !== 0){
		nameField.style.border = "solid 1px rgba(255, 255, 255, 0.1)"
		isNameFilled = true
	}
	if(isPrivacyChecked && isEmailFilled && isNameFilled){
		sendMessageBtn.classList.remove("disabled")
	}
}

const checkIfEmail = () => {
	if(emailField.value.length == 0){
		emailField.style.border = "1px solid #cd5c5c"
		isEmailFilled = false;
	}
	if(emailField.value.length !== 0){
		emailField.style.border = "solid 1px rgba(255, 255, 255, 0.1)"
		isEmailFilled = true;
	}
	if(isPrivacyChecked && isEmailFilled && isNameFilled){
		sendMessageBtn.classList.remove("disabled")
	}
}

const checkIfPrivacyChecked = () => {
	if(privacyCheckBox.checked === false){
		privacyPolicyText.style.color = "#cd5c5c"
		isPrivacyChecked = false;
	}
	if(privacyCheckBox.checked === true){
		privacyPolicyText.style.color = "rgba(255, 255, 255, 0.55)"
		isPrivacyChecked = true;
	}
	if(isPrivacyChecked && isEmailFilled && isNameFilled){
		sendMessageBtn.classList.remove("disabled")
	}
}

const checkAllField = () => {
	checkIfName();
	checkIfEmail();
	checkIfPrivacyChecked();
	if(isPrivacyChecked && isEmailFilled && isNameFilled){
		sendMessageBtn.classList.remove("disabled")
		return true
	}
	else{
		sendMessageBtn.classList.add("disabled")
		return false
	}
}

sendMessageBtn.addEventListener("mouseover", function(){
		checkAllField()
})

privacyCheckBox.addEventListener("change", function(){
	checkIfPrivacyChecked();
})

nameField.addEventListener("change", function(){
	checkIfName();
})

emailField.addEventListener("change", function(){
	checkIfEmail();
})