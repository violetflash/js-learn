const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes", "YOLO", "Can't Stop, Won't Stop"],
  print() {
    // console.log(this);
    const {phrases} = this; //destructuring
    let randIdx = Math.floor(Math.random() * phrases.length);
    return phrases[randIdx];
  },
  start() {
    const {print} = this;
    setInterval(print, 500);
  }
}

annoyer.start();
