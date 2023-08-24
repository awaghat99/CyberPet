import { Dog, Cat, Hamster } from "./class.js";
const readyBtn = document.getElementById("readyButton");
const radioButtons = document.querySelectorAll('input[name="pet"]');
const petPage = document.getElementById("pet-pages");
const mainMenu = document.getElementById("mainMenu");
const inputName = document.getElementById("inputName");
const backButton = document.getElementById("backButton");
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
const customSpan = document.getElementById("custom-span")

let selectedPet;
let selectedName;
const dog = new Dog();

readyBtn.disabled = true;

for (let radioButton of radioButtons) {
    radioButton.addEventListener("click", ()=> {
        console.log("working?")
        readyBtn.disabled = false;
    })
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
        petTitle.innerHTML = `Look after your dog - ${selectedName}`;
        dogPicDiv.style.display = "flex";
        customButton1.textContent = "Fetch";
        customButton2.textContent = "Walk";
        customSpan.textContent = "HAPPINESS"
        eatButton.addEventListener("click", () => {
            dog.eat();
            console.log(dog.health)
        });
        drinkButton.addEventListener("click", () => {
            dog.drink();
        });
        customButton1.addEventListener("click", () => {
            dog.fetch();
        });
        customButton2.addEventListener("click", () => {
            dog.walk();
        });
        const dogIntervalId = setInterval(() => {
            setTimeout(() => {
                dog.health -= 5;
                bars[0].style.width = `${dog.health}%`;
                dog.hunger -= 5;
                bars[1].style.width = `${dog.hunger}%`;
                dog.thirst -= 5;
                bars[2].style.width = `${dog.thirst}%`;
                dog.happiness -= 5;
                bars[3].style.width = `${dog.happiness}%`
            }, 3)
            for (let bar of bars) {
                if (bar.style.width === "0%") {
                    clearInterval(dogIntervalId);
                    backButton.style.display = "block";
                    dogPicDiv.style.display = "none";
                    drinkButton.style.display = "none";
                    eatButton.style.display = "none";
                    customButton1.style.display = "none";
                    customButton2.style.display = "none";
                    tryAgain.style.display = "flex";
                    deadPicDiv.style.display = "flex";
                    console.log("You lose");
                }
            }
        }, 500);
    }else if (selectedPet === "cat"){
        petTitle.innerHTML = `Look after your cat - ${selectedName}`;
        catPicDiv.style.display = "flex";
        const cat = new Cat();
        customButton1.textContent = "Groom";
        customSpan.textContent = "CONTENTMENT";
        customButton2.textContent = "Play with wool";
        eatButton.addEventListener("click", () => {
            cat.eat();
        });
        drinkButton.addEventListener("click", () => {
            cat.drink();
        });
        customButton1.addEventListener("click", () => {
            cat.groom();
        });
        customButton2.addEventListener("click", () => {
            cat.playWool();
        });
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
                    tryAgain.style.display = "flex";
                    drinkButton.style.display = "none";
                    eatButton.style.display = "none";
                    customButton1.style.display = "none";
                    customButton2.style.display = "none";
                    deadPicDiv.style.display = "flex";
                    console.log("You lose");
                    clearInterval(catIntervalId);
                }
            }
        }, 500);
    } else {
        petTitle.innerHTML = `Look after your hamster - ${selectedName}`;
        hamsterPicDiv.style.display = "flex";
        const hamster = new Hamster();
        customSpan.textContent = "INTEREST";
        customButton1.textContent = "Pet";
        customButton2.textContent = "Run on wheel";
        eatButton.addEventListener("click", () => {
            hamster.eat();
        });
        drinkButton.addEventListener("click", () => {
            hamster.drink();
        });
        customButton1.addEventListener("click", () => {
            hamster.pet();
        });
        customButton2.addEventListener("click", () => {
            hamster.runOnWheel();
        });
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
                    hamsterPicDiv.style.display = "none";
                    deadPicDiv.style.display = "flex";
                    drinkButton.style.display = "none";
                    eatButton.style.display = "none";
                    customButton1.style.display = "none";
                    customButton2.style.display = "none";
                    tryAgain.style.display = "flex";
                    console.log("You lose");
                    clearInterval(hamsterIntervalId);
                }
            }
        }, 500);
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
            dogPicDiv.style.display = "flex";
            dog.health = 100;
            dog.hunger = 100;
            dog.thirst = 100;
            dog.happiness = 100;
            bars[0].style.width = `${dog.health}%`;
            bars[1].style.width = `${dog.hunger}%`;
            bars[2].style.width = `${dog.thirst}%`;
            bars[3].style.width = `${dog.happiness}%`;
            const dogIntervalId = setInterval(() => {
                    dog.health -= 5;
                    bars[0].style.width = `${dog.health}%`;
                    dog.hunger -= 5;
                    bars[1].style.width = `${dog.hunger}%`;
                    dog.thirst -= 5;
                    bars[2].style.width = `${dog.thirst}%`;
                    dog.happiness -= 5;
                    bars[3].style.width = `${dog.happiness}%`;
                setTimeout(() => {
                    for (let bar of bars) {
                        if (bar.style.width === "0%") {
                            clearInterval(dogIntervalId);
                            backButton.style.display = "block";
                            dogPicDiv.style.display = "none";
                            drinkButton.style.display = "none";
                            eatButton.style.display = "none";
                            customButton1.style.display = "none";
                            customButton2.style.display = "none";
                            tryAgain.style.display = "flex";
                            deadPicDiv.style.display = "flex";
                            console.log("You lose");    
                }}}, 500)
            }, 500)}})

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
