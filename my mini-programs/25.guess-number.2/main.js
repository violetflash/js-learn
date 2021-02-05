"use strict"

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function randomizer(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));  // задача из учебника из раздела ЧИСЛА
}

function scorePrint(count) {
    let stats = document.createElement("p");
    stats.style.fontWeight = 700;
    stats.style.fontSize = "20px";
    stats.textContent = `Попыток понадобилось: ${count}`;
    document.querySelector('body').append(stats);
}

function guessNumber() {
    let num = randomizer(1, 10);  // внешняя переменная, которую будет использовать нижеприведённая функция tryGuess.
    let count = 0;
    function tryGuess() {
        let guess = prompt("Угадай число от 1 до 100", 0);

        if ( guess === null ) {
            return alert("Игра окончена");
        } else if
        ( !isNumber(guess) ) {
            alert("Введи число!");
            return tryGuess(); // РЕКУРСИЯ
        }

        if ( num < guess ) {
            alert("Загаданное число меньше")
            count++;
            return tryGuess();
        } else if ( num > guess ) {
            alert("Загаданное число больше")
            count++;
            return tryGuess();
        } else {
            count++;
            scorePrint(count); // вывод статистики
            return alert("Поздравляю, Вы угадали!!!");
        }
    }
    return tryGuess(); // ЗАМЫКАНИЕ: функция возвращается вместе с внешней для неё переменной num, сохраненной в её окружении (в области действия функции guessNumber).
}

guessNumber();