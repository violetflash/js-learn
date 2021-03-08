//a function to find the average value in an array of numbers

function avg(array) {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum / array.length;
}

console.log(avg([0,50]));
console.log(avg([75,76,80,95,100]));