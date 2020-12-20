function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
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

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);


//Объект spot получает СОБСТВЕННУЮ реализацию метода bark
spot.bark = function () {
    console.log(this.name + " says WOOF!");
}

fluffy.wag = function () {
    console.log(this.name + " wags with himself");
}

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();