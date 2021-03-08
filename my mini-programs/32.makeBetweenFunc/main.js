//Higher order function
//returns another function
// (function factory)

function makeBetweenFunc(min, max) {
  return function(value) {
    return value >= min && value <= max;
  }
}

const isAdult = makeBetweenFunc(18, 90);
const isChild = makeBetweenFunc(0, 18);

console.log(isAdult(17));
console.log(isChild(17));

const isGoodTemp = makeBetweenFunc(0, 23);

console.log(isGoodTemp(17));