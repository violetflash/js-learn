/*
Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
=================================
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
 */


let Calculator = function() {
  this.read = () => {
    first:
      while (true) {
        this.x = +prompt("Введите первое число",);
        if (isNaN(this.x)) continue;
        while (true) {
          this.y = +prompt("Введите второе число",);
          if (!isNaN(this.y)) break first;
        }
      }
  };
  this.sum = () => {
    return this.x + this.y;
  };
  this.mul = () => {
    return this.x * this.y;
  };
}

let calculator = new Calculator();

calculator.read();
alert(`${calculator.x} + ${calculator.y} = ` + calculator.sum());
alert(`${calculator.x} * ${calculator.y} = ` + calculator.mul());