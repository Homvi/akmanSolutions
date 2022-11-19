//show tax-nuber input if the eployer worked in germany in the past
let taxInput = document.getElementById("taxInput")

let workedCheckbox = document.getElementById("workedAbroad")
let notWorkedCheckbox = document.getElementById("notWorkedAbroad")

const checkIfWorkedInGermany = () => {
    if(workedCheckbox.checked){
        taxInput.classList.remove("unvisible")
    }
    if(notWorkedCheckbox.checked){
        taxInput.classList.add("unvisible")
    }
}

//handle form submit
let contactForm = document.getElementById("apllication-form")
let privacyCheckBox = document.getElementById("privacyPolicy")
let sendMessageBtn = document.getElementById("sendApplicationBtn")
let privacyPolicyText = document.getElementById("privacyPolicyText")
let lastNameField = document.getElementById("lastName")
let firstNameField = document.getElementById("firstName")
let phone = document.getElementById("phone")
let emailField = document.getElementById("email")

let isFirstNameFilled = false;
let isLastNameFilled = false;
let isEmailFilled = false;
let isPrivacyChecked = false;
let isPhoneFilled = false;


const checkIfFirstName = () => {

	if(firstNameField.value.length == 0){
		firstNameField.style.border = "1px solid #cd5c5c"
		isFirstNameFilled = false
	}

	if(firstNameField.value.length !== 0){
		firstNameField.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
		isFirstNameFilled = true
	}

	if(isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled){
		sendMessageBtn.classList.remove("disabled")
	}
}

const checkIfLastName = () => {
	if(lastNameField.value.length == 0){
		lastNameField.style.border = "1px solid #cd5c5c"
		isLastNameFilled = false
	}
	if(lastNameField.value.length !== 0){
		lastNameField.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
		isLastNameFilled = true
	}
	if(isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled){
		sendMessageBtn.classList.remove("disabled")
	}
}
const checkIfPhone = () => {
	if(phone.value.length == 0){
		phone.style.border = "1px solid #cd5c5c"
		isPhoneFilled = false
	}
	if(lastNameField.value.length !== 0){
		phone.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
		isPhoneFilled = true
	}
	if(isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled){
		sendMessageBtn.classList.remove("disabled")
	}

    console.log("Check if phone func ran!", "pHONE value length: ", phone.value.length);
}

const checkIfEmail = () => {
	if(emailField.value.length == 0){
		emailField.style.border = "1px solid #cd5c5c"
		isEmailFilled = false;
	}
	if(emailField.value.length !== 0){
		emailField.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
		isEmailFilled = true;
	}
	if(isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled){
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
	if(isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled){
		sendMessageBtn.classList.remove("disabled")
	}
}

const checkAllField = () => {
	checkIfFirstName();
	checkIfLastName();
	checkIfEmail();
    checkIfPhone();
	checkIfPrivacyChecked();
	if(isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled){
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
        console.log("Fields checked");
})

privacyCheckBox.addEventListener("change", function(){
	checkIfPrivacyChecked();
})

firstNameField.addEventListener("change", function(){
	checkIfFirstName();
})
lastNameField.addEventListener("change", function(){
	checkIfLastName();
})

emailField.addEventListener("change", function(){
	checkIfEmail();
})

phone.addEventListener("change", function(){
	checkIfPhone();
    console.log("Phone field checked");
})