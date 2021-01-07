/*
Найдите наибольший общий делитель чисел a и b.
(Подсказка: вам поможет алгоритм Евклида и цикл while).
 */


//С помощью вычитания
function gcd(a, b) {
  while (a !== b) {
    if (a > b) {
      a -=  b;
    } else {
      b -= a;
    }
  }
  return a;
}

//С помощью деления
function testCycle(a, b) {
  while (b !== 0 && a !== 0) {

    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a || b;
}
