/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Drink {
  constructor(
    // Defines parameters:
    type,
    temperature
  ) {
    // Define properties:
    this.temperature = temperature;
    this.type = type;
  }
  // Add methods like normal functions:
  changeTemp(temp) {
    this.temperature = temp;
  }
  changeContents(type, temperature) {
    this.type = type;
    this.temperature = temperature;
  }
}

export default Drink;
