var view = {
    //метод получает строковое соощение и выводит его в оласти сообщений
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        if (messageArea.classList.contains("error")) {
            messageArea.classList.remove("error");
        }
        messageArea.innerHTML = msg;
    },
    displayErrorMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.classList.add("error");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

//Объект модели
var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [
        {locations: ["06", "16", "26"], hits: ["", "", ""]},
        {locations: ["24", "34", "44"], hits: ["", "", ""]},
        {locations: ["10", "11", "12"], hits: ["", "", ""]},
    ],
    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            index = ship.locations.indexOf(guess);
            if (index >= 0) {
                //есть попадание!
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("Есть попадание!");
                if (this.isSunk(ship)) {
                    view.displayMessage("Корабль уничтожен!");
                    for (let j = 0; j < ship.locations.length; j++) {
                        var sunked = document.getElementById(ship.locations[j]);
                        sunked.classList.add("sunked");
                    }
                    this.shipsSunk++;
                }
                return true;
            }
            //То же самое через перебор:
            // for (let j = 0; j < ship.locations.length; j++) {
            //     if (ship.locations[j] === guess) {
            //         ship.hits[j] = "hit";
            //         view.displayHit(guess);
            //         view.displayMessage("Есть попадание!");
            //         if (this.isSunk(ship)) {
            //             view.displayMessage("Корабль уничтожен!");
            //             this.shipsSunk++;
            //         }
            //         return true;
            //     }
            // }
        }
        view.displayMiss(guess);
        view.displayMessage("Промах!");
        return false;
    },
    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

//Связывает все компоненты, получая координаты выстрела и передавая их модели
//Отслеживает кол-во выстрелов и текущий счет.
var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            //Делаем выстрел
            var hit = model.fire(location);
            //Если выстрел попал в цель, а количество потопленных кораблей равно количеству кораблей в игре,
            // выводится сообщение о том, что все корабли потоплены.
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("Все корабли уничтожены! Выстрелов понадобилось: " + this.guesses)
            }
        }
    }
};

//Функция обрабатывает ввод и проверяет его на корректность
function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess.length !== 2) {
        view.displayErrorMessage("Ошибка! Введите букву A-G(лат.) и цифру 0-6 для выстрела.")
    } else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            view.displayErrorMessage("Ошибка! Некорректный ввод!");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            view.displayErrorMessage("Ошибка! Выстрел за пределы поля!");
        } else {
            return row + column;
        }
    }
    return null;
}

function init() {
    var fireButton = document.getElementById("fireBtn");
    //Назначаем для кнопки функцию - обработчик события нажатия
    fireButton.onclick = handleFireButton;
}

function handleFireButton () {
    //Получение данных от формы. Будет вызываться при каждом нажатии кнопки Fire!
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    //Координаты выстрела передаются контроллеру
    controller.processGuess(guess);
    //Очищаем форму
    guessInput.value = "";
}


window.onload = init;


// controller.processGuess("A0");
// controller.processGuess("B4");
// controller.processGuess("G2");
// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");
// controller.processGuess("C4");
// controller.processGuess("D4");
// controller.processGuess("E4");


// console.log(parseGuess("A0"));
// console.log(parseGuess("B6"));
// console.log(parseGuess("G3"));
// console.log(parseGuess("H0"));
// console.log(parseGuess("A7"));
// console.log(typeof guess.charAt(0))

// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
// view.displayMessage("Промазал!");

// model.fire("53");
// model.fire("06");
// model.fire("16");
// model.fire("26");
// model.fire("34");
// model.fire("24");
// model.fire("44");
// model.fire("12");
// model.fire("11");
// model.fire("10");
// model.fire("30");
// model.fire("10");