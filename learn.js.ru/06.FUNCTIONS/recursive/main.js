/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Сделайте три варианта решения:
1) С использованием цикла.
2) Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
3) С использованием формулы арифметической прогрессии.

Пример работы вашей функции:
function sumTo(n) { /... ваш код ... / }
alert( sumTo(100) ); // 5050

P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
  P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
*/

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumTo(3));

function sumTo2(n) {
    if ( n === 1 ) {
        return n;
    } else {
        return n + sumTo(n - 1);
    }
}

console.log(sumTo2(6));