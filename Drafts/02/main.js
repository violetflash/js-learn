'use strict';

const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const lines = document.querySelectorAll('li');

btn.addEventListener('click', () => {
  if (input.value.trim()) {
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.append(li);
  }
  input.value = '';
});

lines.forEach((line) => {
  line.addEventListener('click', function(e) {
    this.classList.toggle('done');
  });
});


