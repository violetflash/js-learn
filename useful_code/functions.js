//проверка на число
let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

//=====================================================
//обрезание строки
function truncate(str, maxlength) {
  return ( str.length > maxlength ) ? str.slice(0, maxlength - 1) + "..." : str;
}

//=====================================================
//Fisher Yates Shuffle
function shuffle(arr) {
  //loop over array backwards
  for ( let i = arr.length - 1; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap in place (shorthand way of swapping elements using destructuring
    [arr[i], arr[j]] = [arr[j], arr[i]];
    console.log(arr);
  }
}


//=====================================================
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