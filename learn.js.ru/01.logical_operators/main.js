function checkAgeRange(age) {
    if (age >= 14 && age <=90) {
        alert("Возраст находится в диапазоне между 14 и 90");
    } else {
        alert("Возраст не входит в требуемый диапазон");
    }
}

// checkAgeRange(91);

function checkAgeRange2(age) {
    if (!(age >= 14 && age <=90)) {
        alert("Возраст НЕ находится в диапазоне между 14 и 90");
    } else {
        alert("Возраст входит в требуемый диапазон");
    }
}

// checkAgeRange2(14);

function checkAgeRange3(age) {
    if (age < 14 || age > 90) {
        alert("Возраст НЕ находится в диапазоне между 14 и 90");
    } else {
        alert("Возраст входит в требуемый диапазон");
    }
}

checkAgeRange3(90);