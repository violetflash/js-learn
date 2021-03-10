/*
 A getCard() function which returns a random playing card object, like:
 {
  value: 'K',
  suit: 'clubs
 }
 Pick a random value from:
 1,2,3,4,5,6,7,8,9,10,J,Q,K,A
 Pick a random suit from:
 clubs, spades, hearts, diamonds
 */

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getCard() {
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J' ,'Q' ,'K' ,'A'];
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

  return {
    value: getRandom(values),
    suit: getRandom(suits)
  };
}
console.log(getCard());

 