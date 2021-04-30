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

//=======================  ФУНКЦИИ ДЕКОРАТОРЫ =============================================
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
    if (count > arr.length) {
      clearInterval(timer);
    }
  }, 0);
};


// SIMPLE WRAPPER
const wrapper = fn => {
  console.log(`Оборачиваем функцию ${fn.name}`);
  return (...args) => {
    console.log(`Вызов обёртки для ${fn.name}`);
    console.log('Аргументы:');
    console.dir({args} );
    const result = fn(...args); //    const result = fn.apply(null, args);
    console.log(`Результат функции ${fn.name}: `);
    console.dir({result});
    return result;
  };
};

const example = function(a, b) {
  return  a + b;
};

const exampleWrapper = wrapper(example);
console.log(`example(2, 3): ${exampleWrapper(2, 3)}`);


//Предварительный вызов и вызов после вызова основной функции

//эти функции могут быть любыми (для задач)
const bf = (...args) => {
  console.log('before: ', args);
  return args;
};

const af = (result) => {
  console.log('after: ', result);
  return result;
};

//функция обертка для основной функции (fn)
const wrapper2 = (before, fn,  after) => (...args) => after( fn(...before(...args)) );

const example2 = (a, b, c) => {
  console.log(`Функция выполняется ${a}, ${b}, ${c}`);
  return a + b + c;
};

const exampleWrapper2 = wrapper2(bf, example2, af);
exampleWrapper2(1, 3, 6);


//================ ANIMATED COUNTER ==================
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) {
      startTimestamp = timestamp;
    }
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

animateValue(DOMElement, start, end, 100);


// ================ PHONE MASK =========================
function maskPhone(selector, masked = '+7 (___) ___-__-__') {
  const elems = document.querySelectorAll(selector);

  function mask(event) {
    const keyCode = event.keyCode;
    const template = masked,
        def = template.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    console.log(template);
    let i = 0,
        newValue = template.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
    i = newValue.indexOf("_");
    if (i != -1) {
      newValue = newValue.slice(0, i);
    }
    let reg = template.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }
    if (event.type == "blur" && this.value.length < 5) {
      this.value = "";
    }

  }

  for (const elem of elems) {
    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }

}

// use

maskPhone('селектор элементов', 'маска, если маску не передать то будет работать стандартная +7 (___) ___-__-__');
