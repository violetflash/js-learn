const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

let arr = [...cephalopods, ...cnidaria];
console.log(arr);

let arr2 = cephalopods.concat(gastropods, cnidaria);
console.log(arr2);
console.log(cephalopods);


console.log('Objects properties')

const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  legs: 4,
  family: 'Canine',
  furry: true
}

const dog = {
  ...canine,
  isPet: true
}

console.log(dog);

const catDog = {
  ...feline,
  ...canine,
  adorable: true,
  names: {
    atDay: {name: 'cat', name2: 'catDog', name3: 'dog'},
    atNight: {name: 'cat1', name2: 'catDog1', name3: 'dog1'},
  }
}

console.log(catDog);

const catDogCopy = {
  ...catDog      // copies just one level deep, cant copy nested options
}

console.log(catDogCopy);
console.log(catDog === catDogCopy); //false - the unique objects.

console.log("REST=================")

function sum2() {
  console.log(arguments);
  const args = [...arguments]; //input arguments are array like, but not an array, they doesnt have arrays methods like reduce etc...
  return args.reduce( (total, elem) => total + elem)
}

console.log(sum2(1,2,3,4,5));

function sum(...args) {
  return args.reduce((total, elem) => total + elem);
  // let sum = 0;
  // for ( let arg of args ) sum += arg;
  // return sum;
}

console.log(sum(1,2,3,4,5,6));

function fullName(first, last, ...titles) {  //separates remaining arguments after getting certain specific parameters
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
}

fullName('Tom', 'Smith', 'Sir', 'Jr.')

const multiply = (...nums) => nums.reduce((total, currVal) => total * currVal);


console.log(multiply(2,3,4)); //expect 24