class Animals {
    constructor () {
        this.health = 100;
        this.hunger = 100;
        this.thirst = 100;
    }
    depleting(property) {
        setInterval(() => {
            property -= 5; 
        }, 500)
    } 
    eat () {
        this.hunger += 10;
    }
    drink () {
        this.thirst += 10;
    }
}

class Dog extends Animals {
    constructor () {
        super ();
        this.happiness = 100;
    }
    fetch () {
        this.happiness += 10;
        this.hunger -= 10;
        this.thirst -= 10;
    }
    walk() {
        this.happiness += 10;
        this.hunger -= 20;
        this.thirst -= 20;
    }    
}

// module.exports = Animals;
