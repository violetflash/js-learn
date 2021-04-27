'use strict';

let obj = {
  x: 10,
  y: 15,
  test: newTest,
};

function newTest() {
  console.log('this', this);
}

function hardBind(hard) { // Жесткая привязка
  newTest.call(hard);
}

hardBind(obj); // тогда контекст будет не WINDOW!
setTimeout(hardBind, 1000, obj); //объект передается в функцию hardBind как аргумент третьим параметром

//Метод Bind - привязывает контекcт к объекту, но не вызывает
let foo = newTest.bind(obj);