/*
1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
— Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
— В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
— Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)
 */

function ellipsinator(arg) {
  if ( typeof arg === "string" ) {
    if ( arg.length >= 30 ) {
      return arg.slice(0, 30) + "...";
    }
  } else {
    return console.log("не строка");
  }
}

console.log(ellipsinator("123456789 123456789 123456789 123456789"));
console.log(ellipsinator(123456789123456789123456789123456789));