//TODO  Дополнить программу собиранием статистики сыгранных игр (разброс, кол-во попыток) и вывода её по окончании всех игр.

function guessNumber(number, limit) {
    let count = 0;
    while (true) {
        count++;
        let guess = prompt(`Угадай, какое число от 0 до ${limit} я загадал?`, '');
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

function game() {
    let more = true;
    while (more) {
        let limit = prompt("От 0 до какого числа будем загадывать?", 50);
        let secret = Math.floor(Math.random() * (+limit + 1));
        console.log(secret);
        guessNumber(secret, limit);
        more = confirm("Сыграем еще разок?");
    }
    alert("Нет так нет. Пока!");
}

game();

