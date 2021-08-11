//Подсчитать гласные в строке
const calcVowels = (str) => {
    return str ? str.match(/[eaoiuy]/gi).length : null;
};
