var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    gasoline: true,
    started: false,
    start: function () {
        if (this.gasoline) {
            this.started = true;
        } else {
            this.started = false;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};

fiat.start();
fiat.drive();

