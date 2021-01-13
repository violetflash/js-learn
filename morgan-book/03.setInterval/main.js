let heading = document.getElementById('heading');
let counter = 0;
let interval = 30;
let clicks = 0;
heading.style.whiteSpace = "nowrap";


heading.onclick = function (event) {
  heading.innerHTML = `Кликов: ${clicks}`;
  clearInterval(move);
  clicks++;
  interval -= 5;
  move = setInterval(moveHeading, interval);

  if (clicks === 10) {
    clicks = 0;
    clearInterval(move);
    interval = 30;
    heading.innerHTML = `YOU WIN!`;

  }
}


let moveHeading = function () {
  heading.style.marginLeft = counter + "px";
  counter++;

  if (counter > 500) {
    counter = 0;
  }
}

let move = setInterval(moveHeading, interval);


