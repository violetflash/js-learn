class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet{
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return 'Meowww!'
  }
}

const monty = new Cat('Montey', 9, 7);
console.log(monty.eat());

class Dog extends Pet {
  bark() {
    return 'WOOOOF!'
  }
}

const tuzik = new Dog('Tuzik', 12);
console.log(tuzik.eat());