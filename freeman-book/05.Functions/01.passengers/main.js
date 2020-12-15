var passengers = [
    { name: "Jane Doloop", paid: true },
    { name: "Dr. Evil", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true }
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

function fun(echo) {
    console.log(echo);
}

fun("hello");
function boo(aFunction) {
    aFunction("boo");
}
boo(fun);
fun(boo);

var moreFun = fun;
moreFun("hello again");

function echoMaker() {
    return fun;
}
var bigFun = echoMaker();
bigFun("Is there an echo?");

