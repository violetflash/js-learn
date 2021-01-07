/*
В этом задании вам нужно вычислить факториал для числа, передаваемого
в нашу функцию и вывести его с помощью команды return. На всякий случай
напоминаем, что факториал числа a это произведение всех целых чисел от 1 до a,
например, если а = 5, то факториал a будет равен 1 * 2 * 3 * 4 * 5
 */

//TODO Применить решето Эратосфена для решения этой задачи

function factorial(num) {
  let total = 1;
  for (let i = 1; i < num; i++) {
    total *= i + 1;
  }
  return total;
}

console.log(factorial(7));

