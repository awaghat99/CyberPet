// const animalClasses = require("./class.js")
const readyBtn = document.getElementById('readyButton');
const radioButtons = document.querySelectorAll('input[name="pet"');
const petPage = document.getElementById('pet-pages');
const mainMenu = document.getElementById('mainMenu');
const inputName = document.getElementById("inputName");
const healthBar = document.getElementsByClassName("health-bar");
const backButton = document.getElementById('backButton');
const petPicsDiv = document.getElementById("petPicsDiv");
const dogPicDiv = document.getElementById("dogPicDiv");
const catPicDiv = document.getElementById("catPicDiv");
const hamsterPicDiv = document.getElementById("hamsterPicDiv");
const deadPicDiv = document.getElementById("deadPicDiv");
const tryAgain = document.getElementById("tryAgain");
const eatButton = document.getElementById("eatButton");
const drinkButton = document.getElementById("drinkButton");
const customButton1 = document.getElementById("customButton1");
const customButton2 = document.getElementById("customButton2");

readyBtn.addEventListener('click', () => {
    mainMenu.style.display = "none";
    petPage.style.display = "flex";
})

let selectedPet;

// readyBtn.addEventListener('click',() => {
//     for(let radioButton of radioButtons) {
//         if (radioButton.checked) {
//             selectedPet = radioButton.value;
//             break;
//         }
//     }
//     if (selectedPet == "dog") {
//         const dog = new animalClasses.Dog
//     }
// });

// code for when stat reaches 0
if (healthBar == 0){
    petPicsDiv.style.display = "none";
    deadPicDiv.style.display = "flex";
    tryAgain.style.display = "flex";
    drinkButton.style.display = "none";
    eatButton.style.display = "none";
    customButton1.style.display = "none";
    customButton2.style.display = "none";
    // depleting = 0
}

// code for tryAgain
tryAgain.addEventListener("click", () => {
    tryAgain.style.display = "none";
    drinkButton.style.display = "flex";
    eatButton.style.display = "flex";
    customButton1.style.display = "flex";
    customButton2.style.display = "flex";
    // reset bars
    // start bars
})

backButton.addEventListener('click', () => {
    mainMenu.style.display = "block";
    petPage.style.display = "none";
    tryAgain.style.display = "none";
    drinkButton.style.display = "flex";
    eatButton.style.display = "flex";
    customButton1.style.display = "flex";
    customButton2.style.display = "flex";
    // reset bars
    // dont start bars
})

// // code for when bar levels changing set interval?
// for (healthBar >= 70){
// }


// // code for when ok
// for (healthBar < 70 && healthBar > 40){
// }

// // code for when sad
// for (healthBar <= 40){
// }

