const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    suits: ['clubs', 'spades', 'hearts', 'diamonds'],
    initializeDeck() {
      const {suits, values, deck} = this; //destructure
      for (let value of values) {
        for (let suit of suits) {
          deck.push({value, suit,})
        }
      }
      // return deck; //no need to return deck cause we already changed our object deck.
    },
    drawCard() {
      const {drawnCards, deck} = this;
      const card = deck.pop();
      drawnCards.push(card);
      return card;
    },
    drawMultiple(num) {
      const cards = [];
      for (let i = 0; i < num; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      // this.deck.sort(() => Math.random() - 0.5);
      //Fisher Yates Shuffle
      const {deck} = this;
      for ( let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  }
}

const deck1 = makeDeck();
deck1.initializeDeck();
deck1.shuffle();
console.log(deck1.deck);



 