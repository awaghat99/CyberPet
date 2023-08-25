import { Dog, Cat, Hamster } from "./class.js";
import { playCatGame, playDogGame, playHamsterGame } from "./functions.js";

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
const dogAnimations = document.getElementById("dogAnimations");
const catAnimations = document.getElementById("catAnimations");
const hamsterAnimations = document.getElementById("hamsterAnimations");
const deadPicDiv = document.getElementById("deadPicDiv");
const startAudio = document.getElementById("startSound");
const bars = document.getElementsByClassName("bar");
const instructionsButton = document.getElementById("instructionsButton");
const instructionsPage = document.getElementById("instructionsPage");
const returnButton =document.getElementById("returnButton");
export const eatButtonAudio = document.getElementById("eatButtonAudio");
export const drinkButtonAudio = document.getElementById("drinkButtonAudio");
export const customButton1Audio = document.getElementById("customButton1Audio");
export const customButton2Audio = document.getElementById("customButton2Audio");


let selectedPet;
let selectedName;
const dog = new Dog();
const cat = new Cat();
const hamster = new Hamster();

readyBtn.disabled = true;

instructionsPage.style.display = "none";

for (let radioButton of radioButtons) {
    radioButton.addEventListener("click", () => {
        readyBtn.disabled = false;
    });
}

readyBtn.addEventListener("click", () => {
    selectedName = inputName.value;
    backButton.style.display = "none";
    inputName.value = "";
    mainMenu.style.display = "none";
    petPage.style.display = "flex";
    startAudio.load();
    startAudio.play();
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
        startAudio.load();
        startAudio.play();
        for (let bar of bars){
            bar.style.background = "rgb(13, 150, 13)"
        }
        tryAgain.style.display = "none";
        backButton.style.display = "none";
        deadPicDiv.style.display = "none";
        drinkButton.style.display = "flex";
        eatButton.style.display = "flex";
        customButton1.style.display = "flex";
        customButton2.style.display = "flex";
        if (selectedPet === "dog") {
            playDogGame(dog, selectedName);
        } else if (selectedPet === "cat") {
            playCatGame(cat, selectedName);
        } else if (selectedPet === "hamster") {
            playHamsterGame(hamster, selectedName);
        }
    });

backButton.addEventListener("click", () => {
    mainMenu.style.display = "block";
    deadPicDiv.style.display = "none";
    petPage.style.display = "none";
    tryAgain.style.display = "none";
    drinkButton.style.display = "flex";
    eatButton.style.display = "flex";
    customButton1.style.display = "flex";
    customButton2.style.display = "flex";
    dogAnimations.style.display = "none";
    catAnimations.style.display = "none";
    hamsterAnimations.style.display = "none";
    readyBtn.disabled = true;
    for (let bar of bars){
        bar.style.background = "rgb(13, 150, 13)"
    }
});

// button sound on click
eatButton.addEventListener("click", () => {
    eatButtonAudio.load();
    eatButtonAudio.play();
});

drinkButton.addEventListener("click", () => {
    drinkButtonAudio.load();
    drinkButtonAudio.play();
});

customButton1.addEventListener("click", () => {
    customButton1Audio.load();
    customButton1Audio.play();
});

customButton2.addEventListener("click", () => {
    customButton2Audio.load();
    customButton2Audio.play();
});

// instructions Page

instructionsButton.addEventListener("click", () => {
    mainMenu.style.display = "none";
    instructionsPage.style.display = "flex";
});

returnButton.addEventListener("click", () => {
    mainMenu.style.display = "block";
    instructionsPage.style.display = "none";
});