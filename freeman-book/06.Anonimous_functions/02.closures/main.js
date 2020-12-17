function makeCounter() {
    var count = 0;

    function counter() {
        count++;
        return count;
    }

    return counter;   //это ЗАМЫКАНИЕ: функция возвращается вместе с внешней для неё переменной count, сохраненной в её окружении.
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());

//Задачи
console.log("Задачи");

function makePassword(password) {
    return function (passwordGuess) {
        return (passwordGuess === password);
    }
}

function multN(n) {
    return function (num) {
        return num * n;
    }
}

function makeCounter2() {
    var count = 0;
    return increment = {

    }
}