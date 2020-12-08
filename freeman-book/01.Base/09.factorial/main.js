var number = prompt("Введите число для подсчета его факториала:");

function factorial(num) {
    var factorial = 1;
    var counter = num;
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else if (num > 1) {
        while (counter > 1) {
            factorial = factorial * counter;
            counter--;
        }
        return factorial;
    } else {
        return "Ошибка! Отрицательные числа не принимаются"
    }

}

function display(num) {

    document.write(num + "! = " + factorial(num));
}

display(number);

