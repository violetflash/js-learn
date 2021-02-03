/*
Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
через if,
через switch-case
через многомерный массив без ифов и switch.
У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
 */

let random = Math.floor(Math.random() * 2);
let lang = ( random === 0 ) ? "ru" : "en";
let daysRu = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье",];
let daysEn = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",];

function output(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

if ( lang === "ru" ) {
  output(daysRu);
} else {
  output(daysEn);
}

console.log("========================");

switch (lang) {
  case "ru": {
    output(daysRu);
    break;
  }
  case "en": {
    output(daysEn);
    break;
  }
}

console.log("=========================");

let days = {
  "ru": ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
  "en": ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
};

output(days[lang]);