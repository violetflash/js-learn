/*
Создайте <div>, который превращается в <textarea>, если на него кликнуть.
<textarea> позволяет редактировать HTML в элементе <div>.
Когда пользователь нажимает Enter или переводит фокус,
<textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.
 */

// function createDiv() {
//   let div = document.createElement('div');
//   div.className = 'divBlock';
//   div.style.width = '200px';
//   div.style.height = '200px';
//   div.style.border = '1px solid black';
//   return div;
// }
//
// document.body.appendChild(createDiv());
//
//
// createDiv();
//
// div.addEventListener('focus', () => {
//
// })

// const btn = document.querySelector('.btn');
const block = document.querySelector('.block');
let area;

block.addEventListener('click', function(e) {
  startEdit();
});


function startEdit() {
  area = document.createElement('textarea');
  area.className = 'area';
  area.value = block.innerHTML;


  area.addEventListener('keypress', (e) => {
    console.log(e.key)
    if ( e.key == 'Enter' ) this.blur();
  })

  area.addEventListener('blur', () => {
    endEdit();
  })

  block.replaceWith(area);
  area.focus();
}

function endEdit() {
  area.replaceWith(block);
  block.innerHTML = area.value;
}



