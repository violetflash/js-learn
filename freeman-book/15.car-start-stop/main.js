var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    fuel: 0,
    started: false,
    start: function() {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert("The car is on empty, fill up before starting!");
        }
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("Uh oh, " + this.make + " " + this.model + " is out of fuel.");
                this.stop();
            }

        } else {
            alert("You need to start the engine first!");
        }
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
        alert("Time to fill up! Fuel: +" + amount);
    }
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    fuel: 0,
    started: false,
    start: function() {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert("The car is on empty, fill up before starting!");
        }
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("Uh oh, " + this.make + " " + this.model + " is out of fuel.");
                this.stop();
            }

        } else {
            alert("You need to start the engine first!");
        }
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
        alert("Time to fill up! Fuel: +" + amount);
    }
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    fuel: 0,
    started: false,
    start: function() {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert("The car is on empty, fill up before starting!");
        }
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("Uh oh, " + this.make + " " + this.model + " is out of fuel.");
                this.stop();
            }

        } else {
            alert("You need to start the engine first!");
        }
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
        alert("Time to fill up! Fuel: +" + amount);
    }
};

cadi.start();
cadi.addFuel(2);
cadi.start();
cadi.drive();
cadi.drive();
cadi.drive();
cadi.stop();




// chevy.start();
// chevy.drive();
// chevy.stop();
// taxi.start();
// taxi.drive();
// taxi.stop();
