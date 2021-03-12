const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];

const setBgColor = function() {
  // console.log(`${this.style.backgroundColor}`);
  document.body.style.backgroundColor = this.style.backgroundColor;
}

for ( let color of colors ) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.background = color;
  document.querySelector('#boxes').appendChild(box);
  box.addEventListener('click', setBgColor);
}