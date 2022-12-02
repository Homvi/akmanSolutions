let chooseLanguageButton = document.getElementById("chooseLangImg")
const languageOptionsContainer = document.getElementById("languageSelectContainer")

let isLanguageContainerVisible = false;

const toggleLanguages = () => {
    isLanguageContainerVisible = !isLanguageContainerVisible;
    if(isLanguageContainerVisible){
        languageOptionsContainer.style.scale = 1;
        languageOptionsContainer.style.opacity = 1;
    }
    else{
        languageOptionsContainer.style.opacity = 0;
        languageOptionsContainer.style.scale = 0;
    }
}

chooseLanguageButton.onclick = toggleLanguages