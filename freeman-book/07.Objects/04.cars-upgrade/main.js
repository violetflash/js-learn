function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function () {
        this.started = true;
    };
    this.stop = function () {
        this.started = false;
    };
    this.drive = function () {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first!");
        }
    }
}

var cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

var chevyParams = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

var taxiParams = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

var fiatParams = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

var testCarParams = {
    make: "Webville Motors",
    model: "Test Car",
    year: 2014,
    color: "marine",
    passengers: 2,
    convertible: true,
    mileage: 21
}

var cadi = new Car(cadiParams);
var chevy = new Car(chevyParams);
var fiat = new Car(fiatParams);
var taxi = new Car(taxiParams);
var testCar = new Car(testCarParams);

var cars = [chevy, cadi, taxi, fiat, testCar];
for (let i = 0; i < cars.length; i++) {
    cars[i].start();
    for (let j = 0; j < Math.floor(Math.random() * 11) ; j++) {
        cars[i].drive();
    }
    cars[i].stop();
}

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            alert(this.name + " says WOOF!");
        } else {
            alert(this.name + " says Yip!");
        }
    }
}

var limoParams = {
    make: "Webville Motors",
    model: "limo",
    year: 1983,
    color: "black",
    passengers: 12,
    convertible: true,
    mileage: 21120
};

var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);
console.log(limo.make + " " + limo.model + " is an " + typeof limo);
console.log(limoDog.name + " is an " + typeof limoDog);

if (cadi instanceof Car) {
    console.log("Yep! Cadi is a Car!")
}



