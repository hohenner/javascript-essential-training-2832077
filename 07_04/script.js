/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// Build an array with 8 items
let contents = ["Glass", "Brush", 1, 2, 3, "tablet", "pen"];
console.log("contents size: ", contents.length);
console.log(contents);

// Remove the last item
let last = contents.pop();
console.log("last element: ", last);

console.log("contents size: ", contents.length);
console.log(contents);

// Add the last item as the first item on the array
contents.unshift(last);
console.log("contents size: ", contents.length);
console.log(contents);
//version 2
contents.unshift(contents.pop());
console.log("contents size: ", contents.length);
console.log(contents);

// Sort the items by alphabetical order
contents.sort();
console.log("contents size: ", contents.length);
console.log(contents);

// Use the find() method to find a specific item in the array

function element_found(element) {
  return element == "Brush";
}

function element_not_found(element) {
  return element == "brush";
}
let el = contents.find(element_found);
console.log("element found: ", el);

el = contents.find(element_not_found);
console.log("element not found: ", el);

// Remove the item you found using the find method from the array.
console.log("contents size: ", contents.length);
console.log(contents);


let brushIndex = contents.findIndex(element_found);
console.log("Brush index: ", brushIndex);

contents.splice(brushIndex,1)

console.log("contents size: ", contents.length);
console.log(contents);
