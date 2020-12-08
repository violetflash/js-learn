var location1 = 3;
var location2 = 4;
var location3 = 5;
var location = [3, 4, 5];
var guess;
var guesses = 0;
var hits = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (Введите число 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Введите корректное значение!");
    } else {
        guesses = guesses + 1;

        if (location.includes(parseInt(guess))) {
            alert('Попадание!')
            hits++;
            location.splice(guess)

            if (hits == 3) {
                isSunk = true;
                alert("Корабль потоплен!")
            }
        } else {
            alert("Промазал!")
        }
    }
}
var stats = "Вам потребовалось " + guesses + " попыток, чтобы потопить мой корабль. Ваш рейтинг попаданий: " + 3/guesses;
alert(stats);


