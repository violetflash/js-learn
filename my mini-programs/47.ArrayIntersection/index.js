//Найти пересечение двух массивов

const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

const intersection = (a, b) => {
    const arr = [];
    a.forEach((elemA) => {
        b.forEach((elemB) => {
            if (elemA === elemB) {
                arr.push(elemA);
            }
        })
    })
    return arr;
};

console.log(intersection(first, second)); // [3, 4]


const intersection2 = (a, b) => {
    const obj = {};
    a.forEach((elem) => {
        obj[elem] = 'some value';
    })

    return b.filter((elem) => {
        return obj.hasOwnProperty(elem);
    })
};

console.log(intersection2(first, second)); // [3, 4]
