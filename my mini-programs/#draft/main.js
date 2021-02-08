function ucFirst(arg) {
    return arg.charAt(0).toUpperCase() + arg.slice(1);
}

console.log(ucFirst(""));

let spam = ["viagra", "xxx"];

function checkSpam(str) {
    for (let i = 0; i < spam.length; i++) {
        if ( str.toLowerCase().includes(spam[i]) ) return true;
    }
    return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
console.log(checkSpam("ixxxoccent viagrabbit"));

function truncate(str, maxlength) {
    return ( str.length > maxlength ) ? str.slice(0, maxlength - 1) + "..." : str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert( extractCurrencyValue('$120'));