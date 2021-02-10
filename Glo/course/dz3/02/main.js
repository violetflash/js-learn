'use strict';
let main = document.querySelector('.main'),
  ulMain = main.querySelector('ul'),
  input = main.querySelector('.adding__input'),
  button = main.querySelector('button');

let massivli = [];


button.addEventListener('click', () => {
  let newLi = input.value;
  if (newLi) {
    massivli.push(newLi);
  }
  input.value = "";
  console.log(massivli);

  // e.target.reset();
});

