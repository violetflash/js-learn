//TODO  Дополнить программу собиранием статистики сыгранных игр (разброс, кол-во попыток) и вывода её по окончании всех игр.
//Отдельная функция, где с каждой игрой будет обновляться массив
//TODO Упростить функции

let results = [];

function guessNumber(number, limit) {
    let count = 0;
    while (true) {
        count++;
        let guess = prompt(`Угадай, какое число от 0 до ${limit} я загадал?`, '');
        if (isNaN(guess)) {
            alert("Принимаются только числа!")
        } else if (+guess === number) {
            results.push({limit, count}); //наполняем массив статистики
            return alert(`Угадал! Попыток понадобилось: ${count}. `);
        } else if (+guess > number) {
            alert("Меньше!");
        } else if (+guess < number) {
            alert("Больше!");
        }
    }
}

function statsPrint(results) {
    document.write("<p style='font-weight: 700; font-size: 20px;'>Статистика</p>");
    document.write(`Игр сыграно: ${results.length}<br>`);
    for (let i = 0; i < results.length; i++) {
        document.write(`Игра №${i+1}: от 0 до ${results[i].limit} - попыток понадобилось: ${results[i].count}. <br>`);
    }
}

function game() {
    let more = true;
    while (more) {
        let limit = prompt("От 0 до какого числа будем загадывать?", 50);
        if (isNaN(limit)) {
            alert("Принимаются только числа!");
            return game();
        } else if (limit === null) {
            more = confirm("Желаете продолжить игру?");
        } else {
            let number = Math.floor(Math.random() * (+limit + 1));
            console.log(number);
            guessNumber(number, limit);
        }
        more = confirm("Сыграем еще разок?");
    }
    alert("Нет так нет. Пока!");
    statsPrint(results);
}

game();

