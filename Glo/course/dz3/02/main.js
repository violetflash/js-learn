'use strict';
let main = document.querySelector('.main'),
  ulMain = main.querySelector('ul'),
  button = main.querySelector('button');

let input = document.querySelector('.adding__input');

let massivli = [];


input.addEventListener('', function(e){
  let value = e.target.value;

  value = value.replace(/[^A-Za-z]/gi, "");

  this.setState({
    value
  });
});


button.addEventListener('click', () => {
  let newLi = input.value;
  if (newLi) {
    massivli.push(newLi);
  }
  input.value = "";
  console.log(massivli);

  // e.target.reset();
});

