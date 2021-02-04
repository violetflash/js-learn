function makeCounter() {
    let count = 0;

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
    return function guess(passwordGuess) {
        return (passwordGuess === password);
    }
}

var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));

function multN(n) {
    return function(num) {
        return num * n;
    }
}

var multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(2));
console.log("Multiplying 3: " + multBy3(3));

function makeCounter2() {
    var count = 0;
    return  {
        increment: function () {
            return count++;

        }
    }
}

var count2 = makeCounter2();
console.log(count2.increment());
console.log(count2.increment());
console.log(count2.increment());

//Еще пример замыкания.
function makeTimer(doneMessage, n) {
    setTimeout(
        function () { //функция со свободной переменной doneMessage
            alert(doneMessage);  //которая использ-ся как обработчик setTimeout
        },
        n)
    doneMessage = "OUCH!"
}
makeTimer("Cookies!!", 3000);

