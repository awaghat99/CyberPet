// const animalClasses = require("./class.js")
const readyBtn = document.getElementById('readyButton');
const radioButtons = document.querySelectorAll('input[name="pet"');
const petPage = document.getElementById('pet-pages');
const mainMenu = document.getElementById('mainMenu');
const inputName = document.getElementById("inputName");
const healthBar = document.getElementsByClassName("health-bar");
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
});

backButton.addEventListener('click', () => {
    mainMenu.style.display = "block";
    petPage.style.display = "none";
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

// // code for when you lose(timer for total time?), lose popup, play again
// if (healthBar = 0){

// };