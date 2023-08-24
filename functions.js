const eatButton = document.getElementById("eatButton");
const drinkButton = document.getElementById("drinkButton");
const customButton1 = document.getElementById("customButton1");
const customButton2 = document.getElementById("customButton2");
const bars = document.getElementsByClassName("bar");
const petTitle = document.getElementById("pet-title");
const customSpan = document.getElementById("custom-span");
const dogPicDiv = document.getElementById("dogPicDiv");
const catPicDiv = document.getElementById("catPicDiv");
const hamsterPicDiv = document.getElementById("hamsterPicDiv");
const deadPicDiv = document.getElementById("deadPicDiv");
const backButton = document.getElementById("backButton");
const tryAgain = document.getElementById("tryAgain");

export const playDogGame = (dog, selectedName) => {
    dog.health = 100;
    dog.hunger = 100;
    dog.thirst = 100;
    dog.happiness = 100;
    let dogStats = ["health", "hunger", "thirst", "happiness"];
    bars[0].style.width = `${dog.health}%`;
    bars[1].style.width = `${dog.hunger}%`;
    bars[2].style.width = `${dog.thirst}%`;
    bars[3].style.width = `${dog.happiness}%`;
    petTitle.innerHTML = `Look after your dog - ${selectedName}`;
    petTitle.innerHTML = `Look after your dog - ${selectedName}`;
    dogPicDiv.style.display = "flex";
    customButton1.textContent = "Fetch";
    customButton2.textContent = "Walk";
    customSpan.textContent = "HAPPINESS";
    eatButton.addEventListener("click", () => {
        dog.eat();
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
            bars[3].style.width = `${dog.happiness}%`;
        }, 3);
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
        for (let i = 0; i < dogStats.length; i++) {
            if (dog[dogStats[i]] < 65 && dog[dogStats[i]] >= 31) {
                bars[i].style.backgroundColor = "orange";
            } else if (dog[dogStats[i]] <= 30) {
                bars[i].style.backgroundColor = "red";
            } else {
                bars[i].style.backgroundColor = "green";
            }
        }
    }, 500);
};

export const playCatGame = (cat, selectedName) => {
    cat.health = 100;
    cat.hunger = 100;
    cat.thirst = 100;
    cat.content = 100;
    let catStats = ["health", "hunger", "thirst", "content"];
    bars[0].style.width = `${cat.health}%`;
    bars[1].style.width = `${cat.hunger}%`;
    bars[2].style.width = `${cat.thirst}%`;
    bars[3].style.width = `${cat.content}%`;
    petTitle.innerHTML = `Look after your cat - ${selectedName}`;
    catPicDiv.style.display = "flex";
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
                clearInterval(catIntervalId);
                backButton.style.display = "block";
                catPicDiv.style.display = "none";
                tryAgain.style.display = "flex";
                drinkButton.style.display = "none";
                eatButton.style.display = "none";
                customButton1.style.display = "none";
                customButton2.style.display = "none";
                deadPicDiv.style.display = "flex";
                console.log("You lose");
            }
        }
        for (let i = 0; i < catStats.length; i++) {
            if (cat[catStats[i]] < 65 && cat[catStats[i]] >= 31) {
                bars[i].style.backgroundColor = "orange";
            } else if (cat[catStats[i]] <= 30) {
                bars[i].style.backgroundColor = "red";
            } else {
                bars[i].style.backgroundColor = "green";
            }
        }
    }, 500);
};

export const playHamsterGame = (hamster, selectedName) => {
    hamster.health = 100;
    hamster.hunger = 100;
    hamster.thirst = 100;
    hamster.interested = 100;
    let hamsterStats = ["health", "hunger", "thirst", "interested"];
    bars[0].style.width = `${hamster.health}%`;
    bars[1].style.width = `${hamster.hunger}%`;
    bars[2].style.width = `${hamster.thirst}%`;
    bars[3].style.width = `${hamster.interested}%`;
    petTitle.innerHTML = `Look after your hamster - ${selectedName}`;
    hamsterPicDiv.style.display = "flex";
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
        for (let i = 0; i < hamsterStats.length; i++) {
            if (hamster[hamsterStats[i]] < 65 && hamster[hamsterStats[i]] >= 31) {
                bars[i].style.backgroundColor = "orange";
            } else if (hamster[hamsterStats[i]] <= 30) {
                bars[i].style.backgroundColor = "red";
            } else {
                bars[i].style.backgroundColor = "green";
            }
        }
    }, 500);
};
