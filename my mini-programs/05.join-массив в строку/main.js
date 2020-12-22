var list = [1, 2, 3, 1, 89, 12];

function compare(num1, num2) {
    if (num2 === num1) {
        return null;
    }
    return num2 - num1; //от большего к меньшему
}


document.write(list.sort(compare).join(" больше, чем "));
