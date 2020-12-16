var numbersArray = [60, 50, 62, 58, 54, 54];

//Допустим, числа надо отсортировать по возрастанию
//Метод sort будет ожидать, что если 1 число больше 2, то функция вернет больше 0
//если 1 число меньше 2, то вернет отрицательное число
//если числа равны - вернет 0
//сортировка по-возрастанию
function compareNumbers(num1, num2) {
    return num1 - num2;
}

numbersArray.sort(compareNumbers);
console.log(numbersArray);


var products = [
    {name: "Grapefruit", calories: 170, color: "red", sold: 8200},
    {name: "Orange", calories: 160, color: "orange", sold: 12101},
    {name: "Cola", calories: 210, color: "caramel", sold: 25412},
    {name: "Diet cola кола", calories: 0, color: "caramel", sold: 43922},
    {name: "Lemon", calories: 200, color: "clear", sold: 14983},
    {name: "Raspberry", calories: 180, color: "pink", sold: 9427},
    {name: "Root Beer", calories: 200, color: "caramel", sold: 9909},
    {name: "Water", calories: 0, color: "clear", sold: 62123},
];

function compareSold(colaA, colaB) {
    return colaA.sold - colaB.sold;
}

function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else return -1;
}

function compareCalories(colaA, colaB) {
    return colaA.calories - colaB.calories;
}

function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else return -1;
}


function printProducts(products) {
    for (let i = 0; i < products.length; i++) {
        console.log(
            "Name: " + products[i].name +
            ", Calories: " + products[i].calories +
            ", Color: " + products[i].color +
            ", Sold: " + products[i].sold)
    }
}

console.log("Products sorted by Sold value: ");
products.sort(compareSold);
printProducts(products);

console.log("Products sorted by Name: ");
products.sort(compareName);
printProducts(products);

console.log("Products sorted by Calories: ");
products.sort(compareCalories);
printProducts(products);

console.log("Products sorted by Color: ");
products.sort(compareColor);
printProducts(products);



