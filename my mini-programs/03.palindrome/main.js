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
String.prototype.isPalindrome = function () {
    return this.valueOf() === this.split("").reverse().join("");
}

console.log("kok".isPalindrome());
console.log("koka".isPalindrome());

//через reduceRight
String.prototype.isPalindrome2 = function() {
    return this.valueOf() === this.split('').reduceRight((prev, curr) => prev + curr);
}

console.log('===');
console.log("mam".isPalindrome2());
console.log("kok".isPalindrome2());
