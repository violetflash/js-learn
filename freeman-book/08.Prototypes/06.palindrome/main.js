/*
метод palindrome, который возвращает true,
если строка читается одинаково в обоих направлениях (будем считать,
что строка содержит всего одно слово — не будем отвлекаться на палиндромы из нескольких слов).
Добавьте метод в String.prototype и протестируйте результат.
*/

String.prototype.palindrome = function (word) {
    var reverse = this.slice();
    return word === reverse.split("").reverse().join("");
}

var str = "hello";
var str2 = "ollehf";
console.log(str.palindrome(str2));

