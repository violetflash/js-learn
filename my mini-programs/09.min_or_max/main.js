// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(2,5));
console.log(min(3,-1));
console.log(min(1,1));

//Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
    return (Math.random() * max) + min - 1;
}

console.log(random(1,5));