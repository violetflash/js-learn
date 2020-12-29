// let user = {
//     name: "John",
//     surname: "Smith",
// }

let user = new Object({name: "John", surname: "Smith",});

user["name"] = "Pete";
console.log(user["name"]);
delete user["name"];
console.log(user["name"]);

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let isEmpty = obj => {
    for (let prop in obj) {  //если цикл начнет выполняться - значит какое-то свойство есть
        return false;
    }
    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false



// У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

function sumOfSalaries(salaries) {
    let sum = 0;
    for (let prop in salaries) {
        sum += salaries[prop];
    }
    return sum;
}

alert(sumOfSalaries(salaries));

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === "number") {
            obj[prop] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);
