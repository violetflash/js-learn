var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
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

        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Попадание!')
            hits++;

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


