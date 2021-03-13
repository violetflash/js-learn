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

const dog = document.querySelector('#player');
const coin = document.querySelector('#coin');
console.dir(dog)
const extractLeft = (pos) => parseInt(pos);


window.addEventListener('keyup', function(e) {
  if ( isTouching(dog, coin) ) {
    dog.src = 'img/sits.gif';
    moveCoin();
  } else {
    dog.src = 'img/runs.gif';
  }

  if ( e.key === 'ArrowLeft' || e.key === 'Left') {
    dog.classList.add('turn');
    moveHorizontal(dog, -50);
  } else if ( e.key === 'ArrowRight' || e.key === 'Right') {
    dog.classList.remove('turn');
    moveHorizontal(dog, 50);
  } else if ( e.key === 'ArrowUp' || e.key === 'Up') {
    moveVertical(dog, -50);
  } else if ( e.key === 'ArrowDown' || e.key === 'Down') {
    moveVertical(dog, 50);
  }
});

const moveHorizontal = (element, amount) => {
  const leftPos = extractLeft(getComputedStyle(element).left);
  element.style.left = `${leftPos + amount}px`;
}

const moveVertical = (element, amount) => {
  const topPos = extractLeft(getComputedStyle(element).top);
  element.style.top = `${topPos + amount}px`;
}

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.left = `${x}px`;
  coin.style.top = `${y}px`;
}

moveCoin();
// window.addEventListener('keyup', function(e) {
//   dog.src = 'img/sits.gif';
// });
