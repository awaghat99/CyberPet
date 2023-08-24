// const animalClasses = require("./class.js");
const readyBtn = document.getElementById('readyButton')
const radioButtons = document.querySelectorAll('input[name="pet"');
const petPage = document.getElementById('pet-pages')
const mainMenu = document.getElementById('mainMenu')
const backButton = document.getElementById('backButton')
const healthBar = document.getElementById('health')
const hungerBar = document.getElementById('hunger')
const thirstBar = document.getElementById('thirst')
const eatButton = document.getElementById('eatButton')
const drinkButton = document.getElementById('drinkButton')

readyBtn.addEventListener('click', () => {
    mainMenu.style.display = "none";
    petPage.style.display = "flex";
})

let currentHunger = 100;

const updateHungerBar = () => {
    const hungerPercentage = (currentHunger / 100) * 100;
    hungerBar.style.width = hungerPercentage + "%";
}

const decreaseHunger = () => {
    if (currentHunger > 0) {
        currentHunger -= 1;
        updateHungerBar();
        setTimeout(decreaseHunger, 1000)
    }
}

const increaseHunger = () => {
    if (currentHunger < 100) {
        currentHunger += 10;
        updateHungerBar();
    }
}

eatButton.addEventListener('click, increaseHunger');
decreaseHunger();




// readyBtn.addEventListener('click',() => {
//     let selectedPet;
//     for(let radioButton of radioButtons) {
//         if (radioButton.checked) {
//             selectedPet = radioButton.value;
//             break;
//         }
//     }
//     if (selectedPet == "dog") {
//         const dog = new animalClasses.Dog
//     }
// })

// backButton.addEventListener('click', () => {
//     mainMenu.style.display = "block";
//     petPage.style.display = "none";
// })