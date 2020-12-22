//на основе функции
function palindrome(word) {
    if (word === word.split("").reverse().join("")) {
        console.log("Слово " + word + " - палиндром");
    } else {
        console.log("Слово " + word + " - НЕ палиндром");
    }
}

palindrome("wow");

//На основе определения метода в прототипе String
String.prototype.palindrome = function () {
    if (this.valueOf() === this.split("").reverse().join("")) {
        console.log("Слово " + this.valueOf() + " - палиндром");
    } else {
        console.log("Слово " + this.valueOf() + " - НЕ палиндром");
    }
}

"kok".palindrome();