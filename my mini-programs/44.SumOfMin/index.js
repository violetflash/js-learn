//Найти сумму двух минимальных чисел в массиве
const sumOfMin = (arr) => {
    const [a, b] = arr.sort((a, b) => a - b);
    return a + b;
};

console.log(sumOfMin([5, 6, 8, 4])); //9

