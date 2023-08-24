import { Dog, Cat, Hamster } from "./class.js";
import { playCatGame, playDogGame, playHamsterGame, tryAgainDog, tryAgainCat, tryAgainHamster } from "./functions.js";

const readyBtn = document.getElementById("readyButton");
const radioButtons = document.querySelectorAll('input[name="pet"]');
const petPage = document.getElementById("pet-pages");
const mainMenu = document.getElementById("mainMenu");
const inputName = document.getElementById("inputName");
const backButton = document.getElementById("backButton");
const tryAgain = document.getElementById("tryAgain");
const eatButton = document.getElementById("eatButton");
const drinkButton = document.getElementById("drinkButton");
const customButton1 = document.getElementById("customButton1");
const customButton2 = document.getElementById("customButton2");
const dogPicDiv = document.getElementById("dogPicDiv");
const catPicDiv = document.getElementById("catPicDiv");
const hamsterPicDiv = document.getElementById("hamsterPicDiv");
const deadPicDiv = document.getElementById("deadPicDiv");

let selectedPet;
let selectedName;
const dog = new Dog();
const cat = new Cat();
const hamster = new Hamster();

readyBtn.disabled = true;

for (let radioButton of radioButtons) {
    radioButton.addEventListener("click", () => {
        console.log("working?");
        readyBtn.disabled = false;
    });
}

readyBtn.addEventListener("click", () => {
    console.log("clicked");
    selectedName = inputName.value;
    inputName.value = "";
    mainMenu.style.display = "none";
    petPage.style.display = "flex";
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedPet = radioButton.value;
            radioButton.checked = false;
            break;
        }
    }
    if (selectedPet === "dog") {
        playDogGame(dog, selectedName);
    } else if (selectedPet === "cat") {
        playCatGame(cat, selectedName);
    } else {
        playHamsterGame(hamster, selectedName);
    }
}),
    // code for tryAgain
    tryAgain.addEventListener("click", () => {
        tryAgain.style.display = "none";
        deadPicDiv.style.display = "none";
        drinkButton.style.display = "flex";
        eatButton.style.display = "flex";
        customButton1.style.display = "flex";
        customButton2.style.display = "flex";
        if (selectedPet === "dog") {
            tryAgainDog(dog)
        } else if (selectedPet === "cat") {
            tryAgainCat(cat)
        } else if (selectedPet === "hamster") {
            tryAgainHamster(hamster)
        }
    });

// else if (selectedPet === "cat") {
//     catPicDiv.style.display = "flex";
// } else {
//     hamsterPicDiv.style.display = "flex";
//     }
//     // reset bars
//     // start bars
// }),

backButton.addEventListener("click", () => {
    dog.health = 100;
    dog.hunger = 100;
    dog.thirst = 100;
    dog.happiness = 100;
    mainMenu.style.display = "block";
    deadPicDiv.style.display = "none";
    petPage.style.display = "none";
    tryAgain.style.display = "none";
    drinkButton.style.display = "flex";
    eatButton.style.display = "flex";
    customButton1.style.display = "flex";
    customButton2.style.display = "flex";
    dogPicDiv.style.display = "none";
    catPicDiv.style.display = "none";
    hamsterPicDiv.style.display = "none";
    readyBtn.disabled = true;

    // dont start bars
});

// // // code for when bar levels changing
// setInterval(() => {
//     if (bars.style.width >= 70%){
//         bars.style.background = "rgb(13, 150, 13)";
//     } else if (bars.style.width < 70% && bars.style.width >= 35%){
//         bars.style.background =  "orange";
//     } else {
//         bars.style.background =  "#c54";
//     }
// }, 100)
