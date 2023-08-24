import { Dog, Cat, Hamster } from "./class.js";
const readyBtn = document.getElementById("readyButton");
const radioButtons = document.querySelectorAll('input[name="pet"');
const petPage = document.getElementById("pet-pages");
const mainMenu = document.getElementById("mainMenu");
const inputName = document.getElementById("inputName");
const healthBar = document.getElementsByClassName("health-bar");
const bars = document.getElementsByClassName("bar");
const backButton = document.getElementById("backButton");
const eatButton = document.getElementById("eatButton");
const drinkButton = document.getElementById("drinkButton")

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
    if (selectedPet === "dog") {
        const dog = new Dog();
        eatButton.addEventListener("click", () => {
            dog.eat();
        });
        drinkButton.addEventListener("click", () => {
            dog.drink();
        })
        const dogIntervalId = setInterval(() => {
            dog.health -= 5;
            bars[0].style.width = `${dog.health}%`;
            dog.hunger -= 5;
            bars[1].style.width = `${dog.hunger}%`;
            dog.thirst -= 5;
            bars[2].style.width = `${dog.thirst}%`;
            dog.happiness -= 5;
            bars[3].style.width = `${dog.happiness}%`;
            for (let bar of bars) {
                if (bar.style.width === "0%") {
                    console.log("You lose");
                    clearInterval(dogIntervalId);
                }
            }
        }, 500);
    }

    if (selectedPet === "cat") {
        const cat = new Cat();
        const catIntervalId = setInterval(() => {
            cat.health -= 5;
            bars[0].style.width = `${cat.health}%`;
            cat.hunger -= 5;
            bars[1].style.width = `${cat.hunger}%`;
            cat.thirst -= 5;
            bars[2].style.width = `${cat.thirst}%`;
            cat.content -= 5;
            bars[3].style.width = `${cat.content}%`;
            console.log(`${bars[0].style.width}`);
            for (let bar of bars) {
                if (bar.style.width === "0%") {
                    console.log("You lose");
                    clearInterval(catIntervalId);
                }
            }
        }, 500);
    }

    if (selectedPet === "hamster") {
        const hamster = new hamster();
        const hamsterIntervalId = setInterval(() => {
            hamster.health -= 5;
            bars[0].style.width = `${hamster.health}%`;
            hamster.hunger -= 5;
            bars[1].style.width = `${hamster.hunger}%`;
            hamster.thirst -= 5;
            bars[2].style.width = `${hamster.thirst}%`;
            hamster.interested -= 5;
            bars[3].style.width = `${hamster.interested}%`;
            console.log(`${bars[0].style.width}`);
            for (let bar of bars) {
                if (bar.style.width === "0%") {
                    console.log("You lose");
                    clearInterval(hamsterIntervalId);
                }
            }
        }, 500);
    }
});

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

// };
