const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  getFullName() {
    const {first, last, nickName} = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(`${this.getFullName()} is a person`);
  },
  laugh() {
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHAH`);
  }
}

person.getFullName();
person.printBio();
person.laugh();