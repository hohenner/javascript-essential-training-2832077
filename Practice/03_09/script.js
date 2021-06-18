/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeName: function (newName) {
    this.name = newName;
  },
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  changePocketNum: function (newPocket) {
    this.pocketNum = newPocket;
  },
};
console.log("current backpack: ", backpack);

console.log("current name: ", backpack.name);
backpack.changeName("New Backpack");
console.log("new name: ", backpack.name);

console.log("current color: ", backpack.color);
backpack.changeColor(1);
console.log("numeric color: ", backpack.color);
backpack.changeColor("white");
console.log("new color: ", backpack.color);

console.log("current volume: ", backpack.volume);
backpack.changeVolume("white");
console.log("text volume: ", backpack.volume);
backpack.changeVolume(true);
console.log("boolean volume: ", backpack.volume);
backpack.changeVolume(100);
console.log("new volume: ", backpack.volume);

console.log("current pocketNum: ", backpack.pocketNum);
backpack.changePocketNum("white");
console.log("text pocketNum: ", backpack.pocketNum);
backpack.changePocketNum(true);
console.log("boolean pocketNum: ", backpack.pocketNum);
backpack.changePocketNum(30);
console.log("new pocketNum: ", backpack.pocketNum);

console.log("current lid status: ", backpack.lidOpen);
backpack.toggleLid("white");
console.log("text lid status: ", backpack.lidOpen);
backpack.toggleLid(1);
console.log("numeric lid status: ", backpack.lidOpen);
backpack.toggleLid(true);
console.log("new lid status: ", backpack.lidOpen);

console.log("current straplength: ", backpack.strapLength);
backpack.newStrapLength("white", "black");
console.log("text straplength: ", backpack.strapLength);
backpack.newStrapLength(true, false);
console.log("boolean straplength: ", backpack.strapLength);
backpack.newStrapLength("white", false);
console.log("mixed straplength: ", backpack.strapLength);
backpack.newStrapLength(20, 30);
console.log("new straplength: ", backpack.strapLength);

console.log("New backpack: ", backpack);
