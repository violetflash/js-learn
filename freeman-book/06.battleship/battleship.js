var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var guesses = 0;
var hits = 0;
var isSunk = false;

while (isSunk === false) {
    guess = prompt("Ready, aim, fire! (Введите число 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Введите корректное значение!");
    } else {
        guesses = guesses + 1;
    }
}


