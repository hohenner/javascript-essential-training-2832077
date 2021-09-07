/**
 * Assignment vs comparison
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Relational_operators
 */

let a = 5;
let b = 4;

/*
if (a == b) {
  console.log(`Match! let a and let b are the same value.`);
} else {
  console.error(`No match: let a and let b are NOT same value.`);
}
*/
function compare(a, b) {
  console.log("-------");
  console.log(`let a: ${a} (${typeof a})`);
  console.log(`let b: ${b} (${typeof b})`);
  console.log("equality: ", a == b);
  console.log("absolute equality: ", a === b);
  console.log("greater than: ", a > b);
  console.log("less than: ", a < b);
  console.log("greater than or equal: ", a >= b);
  console.log("less than or equal: ", a <= b);
  console.log("not equal: ", a != b);
  console.log("not absolute equal: ", a !== b);
}
compare(a, b);
compare(5, 5);
compare(5, "5");
compare("five", "five");
compare("five", "Five");
compare([1, 2, 3], [1, 2, 3]);
compare([1, 2, 3], [1, 2]);
compare([1, 2], [1, 2, 3]);
compare(
  {
    dance: "Mambo",
    number: 5,
  },
  {
    dance: "Mambo",
    number: 5,
  }
);
/* equality: == will try to do the "right" thing, 5 == "5" is true */
/* absolute equality: === */
