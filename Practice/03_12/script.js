/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import Cup from "./Cup.js";
import Drink from "./Drink.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const drink = new Drink("tea", "hot");
const drink1 = new Drink("soda", "cold");

const cup = new Cup(drink, 9, "blue", true);
const cup1 = new Cup(cup, 9, "blue", true);
const cup2 = new Cup(drink1, 9, "blue", true);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

console.log("The cup object:", cup);
console.log("The cup contains:", cup.contents);
console.log("The cup1 object:", cup1);
console.log("The cup1 contains:", cup1.contents);
console.log("The cup2 object:", cup2);
console.log("The cup2 contains:", cup2.contents);

console.log("The drink object:", drink);
console.log("The drink1 object:", drink1);

drink.changeTemp("cold");
console.log("The drink object:", drink);
console.log("The cup contains:", cup.contents);

drink1.changeContents("ice", "frozen");
console.log("The drink1 object:", drink1);
console.log("The cup2 contains:", cup2.contents);

console.log("The cup object:", cup);
cup.emptyCup();
console.log("The cup object:", cup);
const drink3 = new Drink("coffee", "iced");
cup.fillCup(drink3);
console.log("The cup object:", cup);
