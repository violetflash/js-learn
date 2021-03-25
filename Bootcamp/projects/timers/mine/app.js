
class Timer {
  constructor(input, startBtn, stopBtn, callbacks) {
    this.input = input;
    this.startBtn = startBtn;
    this.stopBtn = stopBtn;
    this.savedTime = parseFloat(this.input.value); //default initial value of input (if no interaction did)
    if ( callbacks ) {
      this.onComplete = callbacks.onComplete;
    }

    this.startBtn.addEventListener('click', this.start);
    this.stopBtn.addEventListener('click', this.stop);
    this.input.addEventListener('keyup', this.saveTime);
  }

  saveTime = () => { // saves the initial value of timer to restore it when finished
    // if ( this.input.value === '' ) this.input.value = 0;
    this.savedTime = parseFloat(this.input.value);
  }

  start = () => {
    this.tick(); // first tick before the setInterval starts
    this.started = setInterval(this.tick, 20);
    this.lockStartBtn();
  }

  tick = () => {
    if ( this.timeRemaining <= 0 || isNaN(this.timeRemaining)) {
      this.stop();
      this.onComplete(this.input, this.savedTime);
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
    }
  }

  stop = () => {
    console.log('stopped');
    clearInterval(this.started);
    this.unlockStartBtn();
  }

  get timeRemaining() {
    return parseFloat(this.input.value);
  }

  set timeRemaining(time) {
    this.input.value = time.toFixed(2);
  }

  lockStartBtn() {
    this.startBtn.setAttribute('disabled', true);
  }

  unlockStartBtn() {
    this.startBtn.removeAttribute('disabled');
  }
}



const input = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const circle = document.querySelector('#circle');

const timer = new Timer(input, startBtn, stopBtn, {

  onComplete(input, savedTime) {
    console.log("That's all folks!")
    setTimeout(() => {   // restores the default value of timer when finished
      input.value = savedTime;

    }, 1000)
  }
});
