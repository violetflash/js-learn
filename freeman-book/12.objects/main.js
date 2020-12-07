var cadillac = {
    make: "Cadillac",
    model: "GM Cadillac",
    year: 1955,
    color: "tan",
    mileage: 892,
    convertible: false,
    passengers: 5,
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

function report(car) {
    document.write('Checking "' + car.make + '" - ' + car.model + ' ......  ' + '<br>');
    if (prequal(car)) {
        document.write("Great car! Take it! <br>");
    } else {
        document.write("No, no, no. You better find another car. <br>");
    }
}

report(taxi);
report(cadillac);