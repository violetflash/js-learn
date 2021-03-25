class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if ( callbacks ) {  //optional argument
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
      this.onPause = callbacks.onPause;
    }

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  start = () => {
    if (this.onStart) this.onStart(this.timeRemaining);
    if (this.timeRemaining > 0) this.tick();
    this.interval = setInterval(this.tick, 10);
    this.disableStart();
  }

  pause = () => {
    if ( this.onPause ) this.onPause(this.timeRemaining)
    clearInterval(this.interval);
    this.ableStart();
  }

  tick = () => {
    if ( this.timeRemaining <= 0 ) {
      this.pause();
      if (this.onComplete) this.onComplete();
    } else {
      //calling method without the parentheses because of using get keyword
      this.timeRemaining = this.timeRemaining - 0.01; // value automatically goes as an argument to setter call
      if (this.onTick) this.onTick(this.timeRemaining);
      // console.log(this.timeRemaining)
    }
  }

  get timeRemaining() {
    return this.durationInput.value;
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }

  disableStart() {
    this.startButton.setAttribute('disabled', 'true');
  }

  ableStart() {
    this.startButton.removeAttribute('disabled');
  }
}