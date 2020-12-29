"use strict"

let user = {
    name: "John",
    age: 30,
}

let sayHi = function() {
    alert("Привет от " + this.name);
}

user.hi = sayHi;

user.hi();
user["hi"]();  // можно вызывать и так через квадратные скобки

let admin = {
    name: "Peter",
    age: 46,
    sayHi() {   //Сокращенная запись
        alert("Привет!");
    }
}

admin.sayHi();