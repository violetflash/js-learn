function Duck(name, type, canFly) {
    this.name = name;
    this.type = type;
    this.canFly = canFly;
}

var potty = new Duck("Potty", "readhead", true);
console.log("Duck's name: " + potty.name);
console.log("Duck's type: " + potty.type);
console.log("Can fly? " + potty.canFly);

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

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];

for (i = 0; i < dogs.length; i++) {

    var size = "small";
    if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log(dogs[i].name + " is a " + size + " " + dogs[i].breed);
    dogs[i].bark();
}




