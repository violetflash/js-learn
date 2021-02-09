let obj = {};
let str;
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

do {
  str = prompt("Введите любое слово");
  if (str) str = str.trim();

} while ( isNumber(str) );

obj += str;

console.log(obj);