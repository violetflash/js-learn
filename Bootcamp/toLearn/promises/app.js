const willGetYouADog = new Promise( (resolve, reject) => {
  ( Math.random() < 0.5 ) ? resolve() : reject();
})

willGetYouADog.then(() => {
  console.log("YAY! WE GOT A DOG!")
})

willGetYouADog.catch(() => {
  console.log(" :( NO DOG...")
})