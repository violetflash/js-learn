function isNatural(n) {
    return !isNaN(n) && isFinite(n) && n >= 0 && (n % 1 === 0);
}

