/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Cup {
  constructor(
    // Defines parameters:
    contents,
    volume,
    color,
    isFull
  ) {
    // Define properties:
    this.isFull = isFull;
    this.volume = volume;
    this.color = color;
    this.contents = contents;
  }
  // Add methods like normal functions:
  emptyCup() {
    this.isfull = false;
    this.contents = null;
  }
  fillCup(drink) {
    this.isfull = true;
    this.contents = drink;
  }
}

export default Cup;
