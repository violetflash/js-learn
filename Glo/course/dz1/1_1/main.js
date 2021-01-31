/*
1) Создать переменную num со значением 266219 (тип данных число)
2) Вывести в консоль произведение (умножение) цифр этого числа
Например: число 123, при помощи javaScript получить каждое цифру ( 1, 2, 3 ) и перемножить их.
Правильно использовать цикл или методы перебора.
3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
4) Вывести на экран первые 2 цифры полученного числа
*/

let num = 266219;
let strNum = String(num);
let result = 1;

for (let i = 0; i < strNum.length; i++) {
    result *= +strNum[i];
}

console.log(result);

result **= 3;
document.write(+String(result).slice(0,2));

//var2
let num2 = 266219;
let result2 = 1;

while ( num2 !== 0 ) {
    result2 *= num2 % 10;
    num2 = Math.floor(num2 / 10);
}

console.log(result2);
