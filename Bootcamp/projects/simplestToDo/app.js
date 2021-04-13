// let txt = document.querySelector('.txt');
//
// txt.addEventListener('keypress', function(e) {
//   if ( e.key === 'Enter' ) {
//     if ( !this.value ) return;
//     const li = document.createElement('li');
//     li.innerText = this.value;
//     li.style.cursor = 'pointer';
//     this.value = "";
//     const list = document.querySelector('.list');
//     list.appendChild(li);
//     li.addEventListener('click', function(e) {
//       this.classList.toggle('done');
//     });
//     li.addEventListener('contextmenu', function(e) {
//       e.preventDefault();
//       this.remove();
//     });
//   }
// });

'use strict';

const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const btn = document.querySelector('button');
const input = document.querySelector('input');
const arr = [];

function renderList(array, target) {
  target.innerHTML = '';

  array.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerText = item.value;
    if (item.completed) {
      li.classList.add('done');
    }

    //  "complete item"
    li.addEventListener('click', function(e) {
      item.completed = !item.completed;
      console.log(item);
      renderList(arr, ul);
    });

    //  delete item
    li.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      arr.splice(index, 1);
      renderList(arr, ul);
    });

    target.append(li);
  });
}

list.forEach(elem => arr.push({'value':elem.innerText, 'completed': false}));

renderList(arr, ul);

function pushAndClear(array, input) {
  if (input.value.trim()) {
    array.push({'value':input.value, 'completed': false});
  }
  input.value = '';
}

btn.addEventListener('click', function(e) {
  pushAndClear(arr, input);
  renderList(arr, ul);
});

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    pushAndClear(arr, input);
    renderList(arr, ul);
  }
});