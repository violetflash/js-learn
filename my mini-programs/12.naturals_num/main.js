function isNatural(n) {
    return !isNaN(n) && isFinite(n) && n >= 0 && (n % 1 === 0);
}

// if (Math.round(n) != n) return false; еще варианты проверки на вещественность
// if (Math.trunc(n) != n) return false;  - Math.trunc - встроенная функция, которая удаляет десятичную часть
