// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше

function pow() {
    let x = prompt("Какое число будем возводить в степень?");
    let n;
    while (true) {
        n = prompt(`В какую степень будем возводить число ${x}?`);
        if (n > 1 && (n.indexOf(".") === -1)) break;
        alert("Принимаются только натуальные числа > 1. Давай еще раз!");
    }

    return x ** n;
}



// console.log(pow());



function pow2(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(pow2(2,3));


//С РЕКУРСИЕЙ БЕЗ ЦИКЛА
function pow3(x,n) {
    return ( n === 1 ) ? x : x * pow3(x, n-1);  // ( n === 1 ) - База рекурсии. x * pow3(x, n-1) - Шаг рекурсии
}

//Общее кол-во вызовов функции  - глубина рекурсии

console.log(pow3(3,2));

