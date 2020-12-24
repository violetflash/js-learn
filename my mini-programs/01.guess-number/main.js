var limit = prompt("От 0 до какого числа будем загадывать?", 50);

function guessNumber(number) {
    var count = 0;
    while (true) {
        count++;
        var guess = prompt(`Угадай, какое число от 0 до ${limit} я загадал?`, '');
        if (isNaN(guess)) {
            alert("Принимаются только числа!")
        } else if (+guess === number) {
            return alert(`Угадал! Попыток понадобилось: ${count}. `);
        } else if (+guess > number) {
            alert("Меньше!");
        } else if (+guess < number) {
            alert("Больше!");
        }
    }
}

var secret = Math.floor(Math.random() * (+limit + 1));
console.log(secret);

guessNumber(secret);