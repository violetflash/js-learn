const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes", "YOLO", "Can't Stop, Won't Stop"],
  pickPhrase() {
    // console.log(this);
    const {phrases} = this; //destructuring
    let randIdx = Math.floor(Math.random() * phrases.length);
    return phrases[randIdx];
  },
  start() {
    console.log(this.pickPhrase());
    /*
    const that = this;
    setInterval(function() {  //setinterval scope is global (WINDOW), that is why 'this' refers to WINDOW instead of our object
      console.log(that.pickPhrase())
    }, 500);
     */
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());  //it works, because arrow functions doesn't have their special 'this'
    }, 500);
  },
  stop() {
    clearInterval(this.timerId);
  }
}

annoyer.start();
