const coinGame = {
  dog: document.querySelector('#player'),
  coin: document.querySelector('#coin'),
  moveCoin() {
    const x = Math.floor(Math.random() * window.innerWidth - 100);
    const y = Math.floor(Math.random() * window.innerHeight -100);
    this.coin.style.left = `${x}px`;
    this.coin.style.top = `${y}px`;
  },
  moveVertical(element, amount) {
    const topPos = parseInt(getComputedStyle(element).top);
    element.style.top = `${topPos + amount}px`;
  },
  moveHorizontal(element, amount) {
    const leftPos = parseInt(getComputedStyle(element).left);
    element.style.left = `${leftPos + amount}px`;
  },
  isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
      aRect.top + aRect.height < bRect.top ||
      aRect.top > bRect.top + bRect.height ||
      aRect.left + aRect.width < bRect.left ||
      aRect.left > bRect.left + bRect.width
    );
  }
}


window.addEventListener('keyup', function(e) {
  const {dog, coin, isTouching, moveHorizontal, moveVertical, moveCoin} = coinGame;
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

coinGame.moveCoin();


