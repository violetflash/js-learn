var passengers = [
    { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evil", paid: true, ticket: "first class" },
    { name: "Sue Property", paid: false, ticket: "first class" },
    { name: "John Funcall", paid: true, ticket: "coach" },
    { name: "Peter Parker", paid: true, ticket: "premium economy" },
    { name: "Steve Rogers", paid: true, ticket: "premium economy" }
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


//возвращаемая функция очень простая и уже соответствует типу пассажира
function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "first class") {
        orderFunction = function () {
            alert("Would you like cocktail or wine?");
        }
    } else if (passenger.ticket === "coach") {
        orderFunction = function () {
            alert("Your choice is cola or water?");
        }
    } else if (passenger.ticket === "premium economy") {
        orderFunction = function () {
            alert("Your choice is cola, water or wine?");
        }
    }
    return orderFunction;
}

//функция возвращает функцию, с уже проведенным сравнением.
function createDinnerOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "first class") {
        orderFunction = function () {
            alert("Would you like chicken or pasta?");
        }
    } else if (passenger.ticket === "coach") {
        orderFunction = function () {
            alert("Your choice is nuts or crackers");
        }
    } else if (passenger.ticket === "premium economy") {
        orderFunction = function () {
            alert("Your choice is snacks or cheese plate?");
        }
    }
    return orderFunction;
}


function serveCustomer(passenger) {
    //возвращает функцию, которая сохраняется в переменной
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    getDinnerOrderFunction();
}

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);



