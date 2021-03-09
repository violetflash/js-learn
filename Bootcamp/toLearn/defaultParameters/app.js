function multiply(a, b = 1) {
 return a * b;
}

console.log(multiply(4,2));

const greet = (person, greet = 'Hi') => console.log(`${greet}, ${person}!`);

console.log(greet('Tim'));
console.log(greet('Tim', 'Yo'));