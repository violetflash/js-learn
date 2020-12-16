var passengers = [
    { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evil", paid: true, ticket: "first class" },
    { name: "Sue Property", paid: false, ticket: "first class" },
    { name: "John Funcall", paid: true, ticket: "coach" }
    ];

var blacklist = ["Dr. Evil", "Sue Property"];

//если пассажир в черном списке - вернёт true
function checkBlacklisted(passenger) {
    return blacklist.indexOf(passenger) >= 0;

}

//если пассажир не оплатил билет - вернет true
function checkNotPaid(passenger) {
    return !passenger.paid;
}

//Проверка пассажира. Если тестовая функция вернет true, значит вылет запрещён
function processPassengers(passengers, testPassenger) {
    for (let i = 0; i < passengers.length; i++) {
        if (testPassenger(passengers[i])) {
            return false;
        }
    }
    return true;
}

var flyOrNot = processPassengers(passengers, checkBlacklisted);

var checkPaid = processPassengers(passengers, checkNotPaid);

if (flyOrNot || checkPaid) {
    console.log("We cant fly");
}

function printPassenger(passenger) {
    var option;
    if (passenger.paid === true) {
        option = "payed"
    } else {
        option = "not payed"
    }
    console.log(passenger.name + " - " + option);
}

processPassengers(passengers, printPassenger);

function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "first class") {
        orderFunction = function () {
            alert("Would you like cocktail or wine?");
        }
    } else {
        orderFunction = function () {
            alert("Your choice is cola or water?");
        }
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    //возвращает функцию, которая сохраняется в переменной
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
}

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);



