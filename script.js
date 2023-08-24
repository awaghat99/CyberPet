import { Dog } from "./class.js";
const readyBtn = document.getElementById("readyButton");
const radioButtons = document.querySelectorAll('input[name="pet"');
const petPage = document.getElementById("pet-pages");
const mainMenu = document.getElementById("mainMenu");
const inputName = document.getElementById("inputName");
const healthBar = document.getElementsByClassName("health-bar");
const bars = document.getElementsByClassName("bar");
const backButton = document.getElementById("backButton");
const hungerBar = document.getElementById('hunger');
const thirstBar = document.getElementById('thirst');
const eatButton = document.getElementById('eatButton');
const drinkButton = document.getElementById('drinkButton');

readyBtn.addEventListener('click', () => {
    mainMenu.style.display = "none";
    petPage.style.display = "flex";
})

readyBtn.addEventListener("click", () => {
    console.log("clicked");
    mainMenu.style.display = "none";
    petPage.style.display = "flex";
    let selectedPet;
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedPet = radioButton.value;
            break;
        }
    }
});

const increaseHunger = () => {
    if (currentHunger < 100) {
        currentHunger += 10;
        updateHungerBar();
    if (selectedPet === "dog") {
        const dog = new Dog();
        const dogIntervalId = setInterval(() => {
            dog.health -= 5;
            bars[0].style.width = `${dog.health}%`;
            dog.hunger -= 5;
            bars[1].style.width = `${dog.hunger}%`;
            dog.thirst -= 5;
            bars[2].style.width = `${dog.thirst}%`;
            dog.happiness -= 5;
            bars[3].style.width = `${dog.happiness}%`;
            console.log(`${bars[0].style.width}`)
            for (let bar of bars) {
                if (bar.style.width === "0%") {
                    console.log("You lose")
                    clearInterval(dogIntervalId)
                }
            }
        }, 500);
    }
    }
};

eatButton.addEventListener('click', increaseHunger)
drinkButton.addEventListener('click', increaseHunger)



backButton.addEventListener("click", () => {
    mainMenu.style.display = "block";
    petPage.style.display = "none";
});

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

// }
