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

