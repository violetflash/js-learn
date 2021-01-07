/*
Квадрат числа по формуле n**2=1+3+5+...+(2∗n−1)
 */

function square(a) {
  var k = 0;
  for (var i = 1; i <= a; i++) {
    k += 2 * i - 1;
  }
  return k;
}