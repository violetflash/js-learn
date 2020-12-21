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

barnaby.sit();
barnaby.sit();
spot.sit();
spot.sit();

barnaby.walk();
barnaby.walk();
barnaby.sit();
barnaby.walk();

console.log(spot.species);
//Проверим, где определяется свойство объекта, в прототипе или в экземпляре
console.log(spot.hasOwnProperty("species"));  //false - значит в экземпляре нет свойства. Значит оно есть в прототипе
console.log(fido.hasOwnProperty("species"));  //false - значит в экземпляре нет свойства. Значит оно есть в прототипе
console.log(spot.hasOwnProperty("sitting"));  //true - у экземпляра spot появилось это свойство при выполнении метода sit()
console.log(fido.hasOwnProperty("sitting")); //false - у экземпляра fido еще данного свойства нет