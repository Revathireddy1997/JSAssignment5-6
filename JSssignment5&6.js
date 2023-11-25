class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log("Tuut tuut");
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
        console.log(`Price: ${this.price}`);
        console.log(`Gas: ${this.gas}`);
        console.log("----------------------");
    }

    race() {
        for (let turn = 1; turn <= 7; turn++) {
            // Calculate gas loss
            let gasLoss = 5;

            if (this.year < new Date().getFullYear()) {
                gasLoss += new Date().getFullYear() - this.year;
            }

            // Update gas
            this.gas -= gasLoss;

            console.log(`Turn ${turn}: ${this.brand} - Gas Remaining: ${this.gas} liters`);
        }
    }
}

// Create car objects
const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

// Invoke the honk method for each car
car1.honk();
car2.honk();
car3.honk();
car4.honk();
car5.honk();
car6.honk();

// Race the cars
console.log("Race Starts!");
car1.race();
car2.race();
car3.race();
car4.race();
car5.race();
car6.race();
