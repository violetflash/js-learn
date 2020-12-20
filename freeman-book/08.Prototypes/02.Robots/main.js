function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectRUs";

Robot.prototype.speak = function () {
    //code to speak
};

Robot.prototype.makeCoffee = function () {
    //code for coffee
};

Robot.prototype.blinkLights = function () {
    //code for blink lights
};

var robby = new Robot("Robby", 1956, "Dr. Morbius");

robby.onOffSwitch = true;
robby.makeCoffee = function () {
    console.log(this.name + " went to starbucks for coffee...");
};

var rosie = new Robot("Rosie", 1962, "George Jetson");
rosie.cleanHouse = function () {
    console.log(this.name + " starts cleaning " + this.owner + "'s house...");
};

console.log(robby.name + " was made by " + robby.maker +
    " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " + rosie.maker +
    " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();

