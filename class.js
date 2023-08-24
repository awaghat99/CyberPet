class Animals {
    constructor () {
        this.health = 100;
        this.health <= 100;
        this.hunger = 100;
        this.hunger <= 100;
        this.thirst = 100;
        this.thirst <= 100;
    }
    depleting(property) {
        setInterval(() => {
            property -= 5; 
        }, 500)
    } 
    eat () {
        this.health += 10
        this.hunger += 10;
    }
    drink () {
        this.health += 10
        this.thirst += 10;
    }
}

class Dog extends Animals {
    constructor () {
        super ();
        this.happiness = 100;
        this.happiness <= 100;
    }
    depletingDog(hunger){
        setInterval(() => {
            hunger -=5
        }, 500)
    }
    fetch () {
        this.happiness += 10;
        this.hunger -= 10;
        this.thirst -= 10;
    }
    walk() {
        this.health += 5
        this.happiness += 10;
        this.hunger -= 20;
        this.thirst -= 20;
    }    
}

class Cat extends Animals {
    constructor () {
        super ();
        this.content = 100;
        this.content <= 100;
    }
    depletingCat(){
        setInterval(() => {
            this.content -=5
        }, 500)
    }
    groom () {
        this.content += 10;
        this.hunger -= 10;
        this.thirst -= 10;
    }
    playWool() {
        this.health += 5
        this.content += 10;
        this.hunger -= 20;
        this.thirst -= 20;
    }    
}

class Hamster extends Animals {
    constructor () {
        super ();
        this.interested = 100;
        this.health = 90;
        this.health <=90;
    }
    pet () {
        this.interested += 10;
        this.hunger -= 10;
        this.thirst -= 10;
    }
    runOnWheel() {
        this.health += 5
        this.interested += 10;
        this.hunger -= 20;
        this.thirst -= 20;
    }    
}

module.exports = {Animals, Dog, Cat, Hamster}
