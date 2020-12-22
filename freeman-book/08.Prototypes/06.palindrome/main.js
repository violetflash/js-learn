/*
метод palindrome, который возвращает true,
если строка читается одинаково в обоих направлениях (будем считать,
что строка содержит всего одно слово — не будем отвлекаться на палиндромы из нескольких слов).
Добавьте метод в String.prototype и протестируйте результат.
*/

String.prototype.palindrome = function () {
    // var str = this.slice();
    return this.valueOf() === this.split("").reverse().join("");
    /*  //еще способ определения палиндрома:
    var len = this.length - 1;
    for (let i = 0; i < len; i++) {
        if (this.charAt(i) !== this.charAt(i - 1)) {
            return false;
        } else if (i === len - i) {
            return true;
        }
    }
    return true;

     */
}

var str = "wow";
console.log(str.palindrome());

