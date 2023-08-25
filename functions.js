import { eatButtonAudio, drinkButtonAudio, customButton1Audio, customButton2Audio } from "./script.js";

const eatButton = document.getElementById("eatButton");
const drinkButton = document.getElementById("drinkButton");
const customButton1 = document.getElementById("customButton1");
const customButton2 = document.getElementById("customButton2");
const bars = document.getElementsByClassName("bar");
const petTitle = document.getElementById("pet-title");
const customSpan = document.getElementById("custom-span");
const deadPicDiv = document.getElementById("deadPicDiv");
const backButton = document.getElementById("backButton");
const tryAgain = document.getElementById("tryAgain");
const dogAnimations = document.getElementById("dogAnimations");
const dogHead = document.getElementById("dogHead");
const catAnimations = document.getElementById("catAnimations");
const catHead = document.getElementById("catHead");
const hamsterAnimations = document.getElementById("hamsterAnimations");
const hamsterHead = document.getElementById("hamsterHead");

const resetGenericStats = (pet) => {
    pet.health = 100;
    pet.hunger = 100;
    pet.thirst = 100;
    bars[0].style.width = `${pet.health}%`;
    bars[1].style.width = `${pet.hunger}%`;
    bars[2].style.width = `${pet.thirst}%`;
};

export const playDogGame = (dog, selectedName) => {
    resetGenericStats(dog);
    dog.happiness = 100;
    bars[3].style.width = `${dog.happiness}%`;

    let dogStats = ["health", "hunger", "thirst", "happiness"];

    petTitle.innerHTML = `Look after your dog - ${selectedName}`;
    dogAnimations.style.display = "flex";
    dogHead.src = "images/dogHeadHappy.webp";
    customButton1.textContent = "Fetch";
    customButton2.textContent = "Walk";
    customSpan.textContent = "HAPPINESS";

    if (!hasEventListenDog) {
        hasEventListenDog = true;
        eatButton.addEventListener("click", () => {
            dog.eat();
            bars[0].style.width = `${dog.health}%`;
            bars[1].style.width = `${dog.hunger}%`;
            bars[2].style.width = `${dog.thirst}%`;
            bars[3].style.width = `${dog.happiness}%`;
        });
        drinkButton.addEventListener("click", () => {
            dog.drink();
            bars[0].style.width = `${dog.health}%`;
            bars[1].style.width = `${dog.hunger}%`;
            bars[2].style.width = `${dog.thirst}%`;
            bars[3].style.width = `${dog.happiness}%`;
        });
        customButton1.addEventListener("click", () => {
            dog.fetch(bars);
            bars[0].style.width = `${dog.health}%`;
            bars[1].style.width = `${dog.hunger}%`;
            bars[2].style.width = `${dog.thirst}%`;
            bars[3].style.width = `${dog.happiness}%`;
        });
        customButton2.addEventListener("click", () => {
            dog.walk(bars);
            bars[0].style.width = `${dog.health}%`;
            bars[1].style.width = `${dog.hunger}%`;
            bars[2].style.width = `${dog.thirst}%`;
            bars[3].style.width = `${dog.happiness}%`;
        });
        document.addEventListener("keyup", (event) => {
            if (event.key === "f") {
                dog.eat();
                eatButtonAudio.load();
                eatButtonAudio.play();
            } else if (event.key === "g") {
                dog.drink();
                drinkButtonAudio.load();
                drinkButtonAudio.play();
            } else if (event.key === "h") {
                dog.fetch(bars);
                customButton1Audio.load();
                customButton1Audio.play();
            } else if (event.key === "j") {
                dog.walk(bars);
                customButton2Audio.load();
                customButton2Audio.play();
            }
        });
    }

    const dogIntervalId = setInterval(() => {
        setTimeout(() => {
            dog.health -= 5;
            bars[0].style.width = `${dog.health}%`;
            dog.hunger -= 6;
            bars[1].style.width = `${dog.hunger}%`;
            dog.thirst -= 8;
            bars[2].style.width = `${dog.thirst}%`;
            dog.happiness -= 5;
            bars[3].style.width = `${dog.happiness}%`;
        }, 3);
        for (let bar of bars) {
            if (bar.style.width === "0%") {
                clearInterval(dogIntervalId);
                dogAnimations.style.display = "none";
                backButton.style.display = "block";
                drinkButton.style.display = "none";
                eatButton.style.display = "none";
                customButton1.style.display = "none";
                customButton2.style.display = "none";
                tryAgain.style.display = "flex";
                deadPicDiv.style.display = "flex";
                console.log("You lose");
                loseAudio.load();
                loseAudio.play();
                return;
            }
        }
        for (let i = 0; i < dogStats.length; i++) {
            if (dog[dogStats[i]] < 65 && dog[dogStats[i]] >= 31) {
                bars[i].style.backgroundColor = "orange";
                dogHead.src = "./images/dogHeadOK.png";
            } else if (dog[dogStats[i]] <= 30) {
                bars[i].style.backgroundColor = "red";
                dogHead.src = "./images/dogHeadSad.webp";
            } else {
                bars[i].style.backgroundColor = "green";
                dogHead.src = "./images/dogHeadHappy.webp";
            }
        }
    }, 500);
};

export const playCatGame = (cat, selectedName) => {
    resetGenericStats(cat);
    cat.content = 100;
    bars[3].style.width = `${cat.content}%`;
    let catStats = ["health", "hunger", "thirst", "content"];
    petTitle.innerHTML = `Look after your cat - ${selectedName}`;
    catAnimations.style.display = "flex";
    catHead.src = "./images/.."
    customButton1.textContent = "Groom";
    customSpan.textContent = "CONTENTMENT";
    customButton2.textContent = "Play with wool";

    if (!hasEventListenCat) {
        hasEventListenCat = true;
        eatButton.addEventListener("click", () => {
            cat.eat();
            bars[0].style.width = `${cat.health}%`;
            bars[1].style.width = `${cat.hunger}%`;
            bars[2].style.width = `${cat.thirst}%`;
            bars[3].style.width = `${cat.content}%`;
        });
        drinkButton.addEventListener("click", () => {
            cat.drink();
            bars[0].style.width = `${cat.health}%`;
            bars[1].style.width = `${cat.hunger}%`;
            bars[2].style.width = `${cat.thirst}%`;
            bars[3].style.width = `${cat.content}%`;
        });
        customButton1.addEventListener("click", () => {
            cat.groom(bars);
            bars[0].style.width = `${cat.health}%`;
            bars[1].style.width = `${cat.hunger}%`;
            bars[2].style.width = `${cat.thirst}%`;
            bars[3].style.width = `${cat.content}%`;
        });
        customButton2.addEventListener("click", () => {
            cat.playWool(bars);
            bars[0].style.width = `${cat.health}%`;
            bars[1].style.width = `${cat.hunger}%`;
            bars[2].style.width = `${cat.thirst}%`;
            bars[3].style.width = `${cat.content}%`;
        });
        document.addEventListener("keyup", (event) => {
            if (event.key === "f") {
                cat.eat();
                eatButtonAudio.load();
                eatButtonAudio.play();
            } else if (event.key === "g") {
                cat.drink();
                drinkButtonAudio.load();
                drinkButtonAudio.play();
            } else if (event.key === "h") {
                cat.groom(bars);
                customButton1Audio.load();
                customButton1Audio.play();
            } else if (event.key === "j") {
                cat.playWool(bars);
                customButton2Audio.load();
                customButton2Audio.play();
            }
        });
    }

    const catIntervalId = setInterval(() => {
        cat.health -= 5;
        bars[0].style.width = `${cat.health}%`;
        cat.hunger -= 8;
        bars[1].style.width = `${cat.hunger}%`;
        cat.thirst -= 5;
        bars[2].style.width = `${cat.thirst}%`;
        cat.content -= 6;
        bars[3].style.width = `${cat.content}%`;
        for (let bar of bars) {
            if (bar.style.width === "0%") {
                catAnimations.style.display = "none";
                backButton.style.display = "block";
                tryAgain.style.display = "flex";
                drinkButton.style.display = "none";
                eatButton.style.display = "none";
                customButton1.style.display = "none";
                customButton2.style.display = "none";
                deadPicDiv.style.display = "flex";
                console.log("You lose");
                clearInterval(catIntervalId);
                loseAudio.load();
                loseAudio.play();
                return;
            }
        }
        for (let i = 0; i < catStats.length; i++) {
            if (cat[catStats[i]] < 65 && cat[catStats[i]] >= 31) {
                bars[i].style.backgroundColor = "orange";
                catHead.src = "./images/cat-head-ok.png"
            } else if (cat[catStats[i]] <= 30) {
                bars[i].style.backgroundColor = "red";
                catHead.src = "./images/sadcat.png"
            } else {
                bars[i].style.backgroundColor = "green";
                catHead.src = "./images/cat.jfif"
            }
        }
    }, 500);
};

export const playHamsterGame = (hamster, selectedName) => {
    resetGenericStats(hamster);
    hamster.interested = 100;
    bars[3].style.width = `${hamster.interested}%`;

    let hamsterStats = ["health", "hunger", "thirst", "interested"];
    petTitle.innerHTML = `Look after your hamster - ${selectedName}`;
    hamsterAnimations.style.display = "flex";
    hamsterHead.src = "./images/"
    customSpan.textContent = "INTEREST";
    customButton1.textContent = "Pet";
    customButton2.textContent = "Run on wheel";

    if (!hasEventListenHamster) {
        hasEventListenHamster = true;
        eatButton.addEventListener("click", () => {
            hamster.eat();
            bars[0].style.width = `${hamster.health}%`;
            bars[1].style.width = `${hamster.hunger}%`;
            bars[2].style.width = `${hamster.thirst}%`;
            bars[3].style.width = `${hamster.interested}%`;
        });
        drinkButton.addEventListener("click", () => {
            hamster.drink();
            bars[0].style.width = `${hamster.health}%`;
            bars[1].style.width = `${hamster.hunger}%`;
            bars[2].style.width = `${hamster.thirst}%`;
            bars[3].style.width = `${hamster.interested}%`;
        });
        customButton1.addEventListener("click", () => {
            hamster.pet(bars);
            bars[0].style.width = `${hamster.health}%`;
            bars[1].style.width = `${hamster.hunger}%`;
            bars[2].style.width = `${hamster.thirst}%`;
            bars[3].style.width = `${hamster.interested}%`;
        });
        customButton2.addEventListener("click", () => {
            hamster.runOnWheel(bars);
            bars[0].style.width = `${hamster.health}%`;
            bars[1].style.width = `${hamster.hunger}%`;
            bars[2].style.width = `${hamster.thirst}%`;
            bars[3].style.width = `${hamster.interested}%`;
        });
        document.addEventListener("keyup", (event) => {
            if (event.key === "f") {
                hamster.eat();
                eatButtonAudio.load();
                eatButtonAudio.play();
            } else if (event.key === "g") {
                hamster.drink();
                drinkButtonAudio.load();
                drinkButtonAudio.play();
            } else if (event.key === "h") {
                hamster.pet(bars);
                customButton1Audio.load();
                customButton1Audio.play();
            } else if (event.key === "j") {
                hamster.runOnWheel(bars);
                customButton2Audio.load();
                customButton2Audio.play();
            }
        });
    }

    const hamsterIntervalId = setInterval(() => {
        hamster.health -= 5;
        bars[0].style.width = `${hamster.health}%`;
        hamster.hunger -= 5;
        bars[1].style.width = `${hamster.hunger}%`;
        hamster.thirst -= 6;
        bars[2].style.width = `${hamster.thirst}%`;
        hamster.interested -= 8;
        bars[3].style.width = `${hamster.interested}%`;
        for (let bar of bars) {
            if (bar.style.width === "0%") {
                backButton.style.display = "block";
                hamsterAnimations.style.display = "none";
                deadPicDiv.style.display = "flex";
                drinkButton.style.display = "none";
                eatButton.style.display = "none";
                customButton1.style.display = "none";
                customButton2.style.display = "none";
                tryAgain.style.display = "flex";
                console.log("You lose");
                clearInterval(hamsterIntervalId);
                loseAudio.load();
                loseAudio.play();
                return;
            }
        }
        for (let i = 0; i < hamsterStats.length; i++) {
            if (hamster[hamsterStats[i]] < 65 && hamster[hamsterStats[i]] >= 31) {
                bars[i].style.backgroundColor = "orange";
                hamsterHead.src = "./images/mediumhamster.png"
            } else if (hamster[hamsterStats[i]] <= 30) {
                bars[i].style.backgroundColor = "red";
                hamsterHead.src = "./images/sadhamster.png"
            } else {
                bars[i].style.backgroundColor = "green";
                hamsterHead.src = "./images/hamster.jfif"
            }
        }
    }, 500);
};
