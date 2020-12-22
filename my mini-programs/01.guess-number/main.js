function guessNumber(number) {
    while (true) {
        var guess = prompt("Угадай, какое число от 0 до 20 я загадал?");
        if (isNaN(guess)) {
            alert("Принимаются только числа!")
        } else if (Number(guess) === secret) {
            return alert("Угадал!");
        } else {
            alert("Не угадал! Попробуй еще раз!");
        }
    }
}

guessNumber(16);