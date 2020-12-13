var view = {
    //метод получает строковое сообщение и выводит его в оласти сообщений
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
        {locations: [0, 0, 0], hits: ["", "", ""]},
        {locations: [0, 0, 0], hits: ["", "", ""]},
        {locations: [0, 0, 0], hits: ["", "", ""]},
    ],

    //Метод создает корабли, пока массив ships не будет заполнен достаточным кол-вом кораблей.
    //Каждый раз когда генерируется новый корабль, метод использует collision для проверки возможных перекрытий
    generateShipLocations: function () {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },

    //Создает массив со случайными позициями корабля
    generateShip: function () {
        var direction = Math.floor(Math.random() * 2);
        var row, col;

        if (direction === 1) {
            //Сгенерировать начальную позицию для горизонтального корабля
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            //Сгенерировать начальную позицию для вертикального корабля
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }

        //Набор позиций нового корабля начинается с пустого массива, в который последовательно доб-ся элем-ты.
        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                //добавить массив для горизонтального корабля
                newShipLocations.push(row + "" + (col + i)); // + "" - для конкатенации строк, а не получения суммы чисел
            } else {
                //добавить массив для вертикального корабля
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },

    collision: function (locations) {
        for (let i = 0; i < this.numShips; i++) {
            var ship = model.ships[i];
            //проверка, встречается ли какая-либо из позиций массива locations нового корабля в массиве Locations сущесьтвующих кораблей.
            for (let j = 0; j < locations.length; j++) {
                //Проверка на присутствие заданной позиции в массиве
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        //Если выполнение дошло до этой точки, значит перекрытие не обнаружено
        return false;
    },

    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];   //получаем объект корабля
            index = ship.locations.indexOf(guess);  //Находим индекс клетки корабля
            if (ship.hits[index] === "hit") {
                view.displayMessage("Вы уже стреляли в эту клетку!")
                return false;
            }
            //indexOf вернет -1, если нет такого вхождения
            if (index >= 0) {
                ship.hits[index] = "hit";   //есть попадание! Записываем попадание в массив попаданий по данному индексу
                view.displayHit(guess);     //Отображение попадания на поле
                view.displayMessage("Есть попадание!");     //Отображение попадания в строке сообщений
                if (this.isSunk(ship)) {    //Проверка, затоплен ли корабль
                    view.displayMessage("Корабль уничтожен!");
                    for (let j = 0; j < ship.locations.length; j++) {   //Затопленный целиком корабль отмечаю красным фоном
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

    //Проверка на потопление
    //Получает объект корабля и проверяет, помечены ли все его клетки маркером попадания
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
        var location = parseGuess(guess);      //Обработка ввода пользователя
        if (location) {     //Если ввод корректен:
            this.guesses++;     //засчитываем попытку
            var hit = model.fire(location);     //Делаем выстрел
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
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;

    model.generateShipLocations();
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

function handleKeyPress (e) {
    var fireButton = document.getElementById("fireBtn");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
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