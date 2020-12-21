function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

//конструктор выставочной собаки
function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this. handler = handler;
}

ShowDog.prototype = new Dog(); //создается прототип выставочной собаки
//объект, наследующий от прототипа Dog (создается так же, как и экземпляры, но без аргументов).
//можно напрямую назначить новый объект свойству prototype.
//т.е. прототип выставочной собаки представляет собой экземпляр собаки.

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function () {
    console.log("Stack");
};

ShowDog.prototype.bait = function () {
    console.log(this.name + " baits!");
};

ShowDog.prototype.gait = function (type) {
    console.log(kind + "ing");
};

ShowDog.prototype.groom = function () {
    console.log("Groom")
};

Dog.prototype.species = "Canine";

Dog.prototype.stacking = true;

Dog.prototype.stack = function () {
    if (this.stacking) {
        console.log(this.name + " is already stands still!")
    } else {
        console.log(this.name + " is now stands still.")
    }
}

Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function () {
    console.log(this.name + " runs...");
};

Dog.prototype.wag = function () {
    console.log(this.name + " wags with you!");
};

Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log(this.name + " is already sitting");
    } else {
        this.walking = false;
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
}

Dog.prototype.walking = false;

Dog.prototype.walk = function () {
    if (this.walking) {
        console.log(this.name + " is already walking with you!");
    } else {
        this.sitting = false;
        this.walking = true;
        console.log(this.name + " started walking...");
    }
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var barnaby = new Dog("Barnaby", "Basset Hound", 55);
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

console.log(fido instanceof ShowDog);
console.log("Fido constructor is " + fido.constructor);
console.log(scotty instanceof Dog);
console.log(scotty instanceof ShowDog);

scotty.bait();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);
