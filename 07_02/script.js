/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);
console.log(collection[1]);
// allows inserting an element beyond the end of the array, even leaving a gap
collection[5] = 123;
console.log(collection);
// can increase size using length attribute
collection.length = collection.length + 2;
console.log(collection);
