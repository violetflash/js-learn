function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

function SpaceRobot(name, year, owner, homePlanet) {
    Robot.call(this, name, year, owner);
    this.homePlanet = homePlanet;
}

SpaceRobot.prototype = new Robot(); //создаем новый прототип космических роботов, который унаследует методы от робота

SpaceRobot.prototype.toString = function () {
    console.log(this.name + " Robot belonging to " + this.owner);
}

SpaceRobot.prototype.speak = function () {
    alert(this.name + " says: Sir, If I may venture an opinion...");
};

SpaceRobot.prototype.pilot = function () {
    alert(this.name + " says: Thrusters? Are they important?");
}

Robot.prototype.maker = "ObjectRUs";

Robot.prototype.speak = function () {
    //code to speak
};

Robot.prototype.errorMessage = "All systems go."

Robot.prototype.reportError = function () {
    console.log(this.name + " says: " + this.errorMessage);
};

Robot.prototype.spillWater = function () {
    console.log(this.name + " says: Shhh it! Water spill detected!")
    this.errorMessage = "I appear to have a short circuit!";
};

Robot.prototype.makeCoffee = function () {
    //code for coffee
};

Robot.prototype.blinkLights = function () {
    //code for blink lights
    console.log(this.name + " is blinking his eyes...")
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

var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker + " and owned by " + c3po.owner);

var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak();

console.log(robby.name + " was made by " + robby.maker +
    " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " + rosie.maker +
    " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();

rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.reportError();
robby.reportError();

console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));

console.log(robby);
console.log("Robot is: " + simon);
