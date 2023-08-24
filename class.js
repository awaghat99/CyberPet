class Animals {
    constructor() {
        this.health = 100;
        this.hunger = 100;
        this.thirst = 100;
    }
    eat() {
        this.health += 10;
        this.hunger += 10;
        if (this.health > 100) {
            this.health = 100
        }
        if (this.hunger > 100) {
            this.hunger = 100
        }
    }
    drink() {
        this.health += 10;
        this.thirst += 10;
        if (this.health > 100) {
            this.health = 100
        }
        if (this.thirst > 100) {
            this.thirst = 100
        }
    }
}

export class Dog extends Animals {
    constructor() {
        super();
        this.happiness = 100;
    }
    fetch() {
        this.happiness += 10;
        this.hunger -= 10;
        this.thirst -= 10;
        if (this.happiness > 100) {
            this.happiness = 100
        }
    }
    walk() {
        this.health += 5;
        this.happiness += 10;
        this.hunger -= 5;
        this.thirst -= 5;
        if (this.happiness > 100) {
            this.happiness = 100
        }
    }
}

export class Cat extends Animals {
    constructor() {
        super();
        this.content = 100;
        this.content <= 100;
    }
    groom() {
        this.content += 10;
        this.hunger -= 10;
        this.thirst -= 10;
        if (this.content > 100) {
            this.content = 100
        }
    }
    playWool() {
        this.health += 5;
        this.content += 10;
        this.hunger -= 20;
        this.thirst -= 20;
        if (this.content > 100) {
            this.content = 100
        }
    }
}

export class Hamster extends Animals {
    constructor() {
        super();
        this.interested = 100;
        this.health = 90;
    }
    pet() {
        this.interested += 10;
        this.hunger -= 10;
        this.thirst -= 10;
        if (this.interested > 100) {
            this.interested = 100
        }
    }
    runOnWheel() {
        this.health += 5;
        this.interested += 10;
        this.hunger -= 20;
        this.thirst -= 20;
        if (this.interested > 100) {
            this.interested = 100
        }
    }
}
