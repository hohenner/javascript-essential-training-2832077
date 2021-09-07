/**
 * Arithmetic operators
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

let a = 5;
let b = 4;
let c = 3.2;
/*
console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);
console.log(`let c: ${c} (${typeof c})`);

let result = a + b;

console.log("addition: ", result);
console.log("subtraction: ", a - b);
console.log("division: ", a / b);
*/
function mathFunction(a, b) {
  console.log("---");
  console.log(`let a: ${a} (${typeof a})`);
  console.log(`let b: ${b} (${typeof b})`);

  console.log("addition: ", a + b);
  console.log("subtraction: ", a - b);
  console.log("division: ", a / b);
  console.log("multiplication: ", a * b);
  console.log("modulus, remainder: ", a % b);
  console.log("increment before display a: ", ++a);
  console.log("decrement before dispaly a: ", --a);
  console.log("increment after display a: ", a++, "a: ", a);
  console.log("decrement after dispaly a: ", a--, "a: ", a);
}

mathFunction(a, b);
mathFunction(a, c);
mathFunction(c, a);
mathFunction(a, "b");
mathFunction("a", b);
mathFunction(a, "2");
mathFunction("2", b);
