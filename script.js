// const animalClasses = require("./class.js")
const readyBtn = document.getElementById('readyButton')
const radioButtons = document.querySelectorAll('input[name="pet"');
const petPage = document.getElementById('pet-pages')
const mainMenu = document.getElementById('mainMenu')
const backButton = document.getElementById('backButton')

// readyBtn.addEventListener('click', () => {
//     mainMenu.style.display = "none";
//     petPage.style.display = "flex";
// })

readyBtn.addEventListener('click',() => {
    let selectedPet;
    for(let radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedPet = radioButton.value;
            break;
        }
    }
    if (selectedPet == "dog") {
        const dog = new animalClasses.Dog
    }
})

backButton.addEventListener('click', () => {
    mainMenu.style.display = "block";
    petPage.style.display = "none";
})