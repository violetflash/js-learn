'use strict';
//проверка на число
let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
};

//проверка на строку
const isString = function(str) {
  return str && isNaN(parseFloat(str));
};

/*
let b;
do {
    b = prompt("add string");
} while (!isString(b));
 */

//=====================================================
//обрезание строки
function truncate(str, maxlength) {
  return ( str.length > maxlength ) ? str.slice(0, maxlength - 1) + "..." : str;
}
//=====================================================


//============= Fisher Yates Shuffle ==================
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


// ========= MAKE BETWEEN FUNC ========================
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
//======================================================


//Detects if two elements of the DOM are overlapping
function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}
//=========================================================


//================ DEBOUNCE DECORATOR FUNCTION ============
const debounce = (func, delay=1000) => {
  let timeoutId;

  return (...args) => {   // return (arg1, arg2, arg3) => {
    if ( timeoutId ) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      //
      func.apply(null, args); // like 'func(arg1, arg2, arg3)' - apply automatically keeps track of how many arguments we need to pass through
    }, delay);
  };
};
//=========================================================


//======== REMOVE ALL ELEMENTS BY CLASSNAME ================
function removeElementsByClass(className) {
  var elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
//==========================================================


//Логгирование
const logger = function(callback) {
  return function() {
    const args = Array.prototype.slice.call(arguments);
    const res = callback.apply(null, args); //or callback(...args) - spread
    console.log(`
    Вызов функции ${callback.name} с аргументами ${args}
    Результат вызова: ${res}`);
  };
};

const sum = function(a, b ,c) {
  return a + b + c;
};

const sumLog = logger(sum);
const result = sumLog(2,4,6);
console.log(result);


//EACHER
const eacher = function(arr, callback) {
  let count = 0;
  const timer = setInterval(function() {
    callback(arr[count++]);
    if (count > arr.length) clearInterval(timer);
  }, 0);
};

