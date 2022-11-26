//handle form submit
let taxInput = document.getElementById("taxInput")
let taxInputInput = document.getElementById("taxInputInput")
let workedCheckbox = document.getElementById("workedAbroad")
let notWorkedCheckbox = document.getElementById("notWorkedAbroad")
let contactForm = document.getElementById("apllication-form")
let privacyCheckBox = document.getElementById("privacyPolicy")
let sendMessageBtn = document.getElementById("sendApplicationBtn")
let privacyPolicyText = document.getElementById("privacyPolicyText")
let lastNameField = document.getElementById("lastName")
let firstNameField = document.getElementById("firstName")
let phone = document.getElementById("phone")
let emailField = document.getElementById("email")
let professionSelect = document.getElementById("select-profession")

let isFirstNameFilled = false;
let isLastNameFilled = false;
let isEmailFilled = false;
let isPrivacyChecked = false;
let isPhoneFilled = false;
let isProfessionChosen = false;
let workedInGermany = false;
let isTaxNumberFilled = true;

sendMessageBtn.type = "button"

const checkIfWorkedInGermany = () => {
	if (workedCheckbox.checked) {
		taxInput.classList.remove("unvisible")
		workedInGermany = false
	}
	if (notWorkedCheckbox.checked) {
		taxInput.classList.add("unvisible")
		workedInGermany = true
	}
}
//check if taxnumber filled
const checkIfTaxNumberFilled = () => {
	if (!isTaxNumberFilled && taxInputInput.value.length < 2) {
		taxInputInput.style.border = "1px solid #cd5c5c"
		isTaxNumberFilled = false
	}

	if (taxInputInput.value.length >= 2) {
		taxInputInput.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
		isTaxNumberFilled = true
	}

	if (isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled && isProfessionChosen && isTaxNumberFilled) {
		sendMessageBtn.classList.remove("disabled")
		sendMessageBtn.type = "submit"
	}
}


const checkIfFirstName = () => {

	if (firstNameField.value.length == 0) {
		firstNameField.style.border = "1px solid #cd5c5c"
		isFirstNameFilled = false
	}

	if (firstNameField.value.length !== 0) {
		firstNameField.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
		isFirstNameFilled = true
	}

	if (isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled && isProfessionChosen && isTaxNumberFilled) {
		sendMessageBtn.classList.remove("disabled")
	}
}

const checkIfProfessionChosen = () => {

	if (professionSelect.value == "-") {
		professionSelect.style.border = "1px solid #cd5c5c"
		isProfessionChosen = false
	}

	if (professionSelect.value !== "-") {
		professionSelect.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
		isProfessionChosen = true
	}

	if (isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled && isProfessionChosen && isTaxNumberFilled) {
		sendMessageBtn.classList.remove("disabled")
		sendMessageBtn.type = "submit"
	}
}

const checkIfLastName = () => {
	if (lastNameField.value.length == 0) {
		lastNameField.style.border = "1px solid #cd5c5c"
		isLastNameFilled = false
	}
	if (lastNameField.value.length !== 0) {
		lastNameField.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
		isLastNameFilled = true
	}
	if (isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled && isProfessionChosen && isTaxNumberFilled) {
		sendMessageBtn.classList.remove("disabled")
		sendMessageBtn.type = "submit"
	}
}
const checkIfPhone = () => {
	if (phone.value.length == 0) {
		phone.style.border = "1px solid #cd5c5c"
		isPhoneFilled = false
	}
	if (phone.value.length !== 0) {
		phone.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
		isPhoneFilled = true
	}
	if (isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled && isProfessionChosen && isTaxNumberFilled) {
		sendMessageBtn.classList.remove("disabled")
		sendMessageBtn.type = "submit"
	}
}

const checkIfEmail = () => {
	if (emailField.value.length == 0) {
		emailField.style.border = "1px solid #cd5c5c"
		isEmailFilled = false;
	}
	if (emailField.value.length !== 0) {
		emailField.style.border = "solid 2px rgba(255, 255, 255, 0.1)"
		isEmailFilled = true;
	}
	if (isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled && isProfessionChosen && isTaxNumberFilled) {
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
	if (isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled && isProfessionChosen && isTaxNumberFilled) {
		sendMessageBtn.classList.remove("disabled")
		sendMessageBtn.type = "submit"
	}
}

const checkAllField = () => {
	checkIfFirstName();
	checkIfLastName();
	checkIfEmail();
	checkIfPhone();
	checkIfPrivacyChecked();
	checkIfProfessionChosen();
	checkIfTaxNumberFilled();
	console.log("istaxnumberfilled: ", isTaxNumberFilled);
	if (isPrivacyChecked && isEmailFilled && isFirstNameFilled && isLastNameFilled && isPhoneFilled && isProfessionChosen && isTaxNumberFilled) {
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

 sendMessageBtn.addEventListener("mouseover", function () {
	checkAllField()
}) 


privacyCheckBox.addEventListener("change", function () {
	checkIfPrivacyChecked();
})

firstNameField.addEventListener("change", function () {
	checkIfFirstName();
})
lastNameField.addEventListener("change", function () {
	checkIfLastName();
})

emailField.addEventListener("change", function () {
	checkIfEmail();
})

phone.addEventListener("change", function () {
	checkIfPhone();
})

professionSelect.addEventListener("change", function () {
	checkIfProfessionChosen();
})

taxInput.addEventListener("change", function () {
	checkIfTaxNumberFilled();
})