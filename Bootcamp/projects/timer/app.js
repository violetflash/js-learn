class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if ( callbacks ) {  //optional argument
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  start = () => {
    if (this.onStart) this.onStart();
    if (this.timeRemaining > 0) this.tick();
    this.interval = setInterval(this.tick, 1000);
    this.disableStart();
  }

  pause = () => {
    clearInterval(this.interval);
    this.ableStart();
  }

  tick = () => {
    if ( this.timeRemaining <= 0 ) {
      if (this.onComplete) this.onComplete();
      this.pause();
    } else {
      //calling method without the parentheses because of using get keyword
      this.timeRemaining = this.timeRemaining - 1; // value automatically goes as an argument to setter call
      console.log(this.timeRemaining)
    }
  }

  get timeRemaining() {
    return this.durationInput.value;
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }

  disableStart() {
    this.startButton.setAttribute('disabled', 'true');
  }

  ableStart() {
    this.startButton.removeAttribute('disabled');
  }
}

const durationInput  = document.querySelector('#duration');
const startButton  = document.querySelector('#start');
const pauseButton  = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started!');
  },
  onTick() {

  },
  onComplete() {
    console.log("Time's UP!");
  }
});