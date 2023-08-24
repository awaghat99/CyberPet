import { Dog, Cat, Hamster } from "./class.js";
const readyBtn = document.getElementById("readyButton");
const radioButtons = document.querySelectorAll('input[name="pet"');
const petPage = document.getElementById("pet-pages");
const mainMenu = document.getElementById("mainMenu");
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
const bars = document.getElementsByClassName("bar");
const petTitle = document.getElementById("pet-title");

let selectedPet;
let selectedName;

readyBtn.disabled = true;

for (let radioButton of radioButtons && inputName.value) {
    if (radioButton.checked && inputName.value !== "") {
       readyBtn.disabled = false;
    }
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
            break;
        }
    }
    if (selectedPet === "dog") { 
        petTitle.innerHTML = `Look after your dog - ${selectedName}`;
        dogPicDiv.style.display = "flex";
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
                    dogPicDiv.style.display = "none";
                    deadPicDiv.style.display = "flex";
                    console.log("You lose");
                    clearInterval(dogIntervalId);
                }
            }
        }, 500);
    }else if (selectedPet === "cat"){
        petTitle.innerHTML = `Look after your cat - ${selectedName}`;
        catPicDiv.style.display = "flex";
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
                    catPicDiv.style.display = "none";
                    deadPicDiv.style.display = "flex";
                    console.log("You lose")
                    clearInterval(catIntervalId)
                }
            }
        }, 500);
    } else {
        petTitle.innerHTML = `Look after your hamster - ${selectedName}`;
        hamsterPicDiv.style.display = "flex";
        const hamster = new Hamster ();
        const hamsterIntervalId = setInterval(() => {
            hamster.health -= 5;
            bars[0].style.width = `${hamster.health}%`;
            hamster.hunger -= 5;
            bars[1].style.width = `${hamster.hunger}%`;
            hamster.thirst -= 5;
            bars[2].style.width = `${dog.thirst}%`;
            hamster.interested -= 5;
            bars[3].style.width = `${dog.happiness}%`;
            console.log(`${bars[0].style.width}`)
            for (let bar of bars) {
                if (bar.style.width === "0%") {
                    hamsterPicDiv.style.display = "none";
                    deadPicDiv.style.display = "flex";
                    console.log("You lose")
                    clearInterval(hamsterIntervalId)
                }
            }
        }, 500);
    }
}),



// function code for when stat reaches 0
    // loseFunction = () => {
    //     petPicsDiv.style.display = "none";
    //     deadPicDiv.style.display = "flex";
    //     tryAgain.style.display = "flex";
    //     drinkButton.style.display = "none";
    //     eatButton.style.display = "none";
    //     customButton1.style.display = "none";
    //     customButton2.style.display = "none";
    //     // depleting = 0
    // }

// code for tryAgain
tryAgain.addEventListener("click", () => {
    tryAgain.style.display = "none";
    drinkButton.style.display = "flex";
    eatButton.style.display = "flex";
    customButton1.style.display = "flex";
    customButton2.style.display = "flex";
    // reset bars
    // start bars
}),

backButton.addEventListener('click', () => {
    mainMenu.style.display = "block";
    petPage.style.display = "none";
    tryAgain.style.display = "none";
    drinkButton.style.display = "flex";
    eatButton.style.display = "flex";
    customButton1.style.display = "flex";
    customButton2.style.display = "flex";
    dogPicDiv.style.display = "none";
    catPicDiv.style.display = "none";
    hamsterPicDiv.style.display = "none";
    // reset bars
    // dont start bars
})

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
