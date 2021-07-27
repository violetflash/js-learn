//Написать функцию которая считает максимальную вложенность в дереве DOM

const temp = (() => {
    let count = 0;

    return () => count++;
})();

console.log(temp());
console.log(temp());
console.log(temp());
console.log(temp());



// add(2, 5)
//add(2)(5);

const add = (a, b) => {
    if (b === undefined) {
        return (c) => a + c;
    }

    return a + b;
};
// const add = (a) => {
//     return (n) => {
//         return a + n;
//     };
// };
console.log(add(2, 5));
console.log(add(2)(5));

//'somename.jpeg'
//return 'jpeg'
//'shsdhsh.shshh.shsh.exe'

const getExtension = (str) => {
    // const idx = str.indexOf('.');
    // return str.slice(idx + 1);
    // const indexes = [];
    // str.split('').forEach((char, index) => {
    //     if (char === '.') {
    //         indexes.push(index);
    //     }
    // })
    if (typeof str !== 'string') {
        throw new Error('Invalid type of parameter');
    }

    const arr = str.split('.');
    if (arr.length === 1) {
        return 'No extension here'
    }

    return arr[arr.length - 1];


    // return str.slice(indexes[indexes.length - 1] + 1);
};

console.log(getExtension('shsdhsh.shshh.shsh.exe'));

const app = document.getElementById('app');
const { log } = console;

const divs = app.querySelectorAll('div');
log(divs);

const getMax = (arr) => {

};

// log(getMax([...divs]));
console.log([...divs]);

[...divs].forEach((div) => log(div.children.length))
