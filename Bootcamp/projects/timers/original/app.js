const durationInput  = document.querySelector('#duration');
const startButton  = document.querySelector('#start');
const pauseButton  = document.querySelector('#pause');
const circle = document.querySelector('#circle');

const perimeter = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) { //receive timeRemaining from start func
    duration = totalDuration;
    console.log(duration, '----', savedTime)


  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset',
      perimeter * timeRemaining / duration - perimeter // dashoffset formula
    );
  },
  onComplete() {
    console.log("Time's UP!");
  },
  onPause(timeRemaining) {
    console.log(timeRemaining)
  }
});