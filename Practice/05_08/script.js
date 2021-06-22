/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 *
 * assignment:
 * 1. find element add 2 classes
 * 2. remove one of those classes
 * 3. add a new attribute to an element
 * extra:
 * 4. request value of an attribute
 * 5. change value of the attribute
 * 6. add some CSS to an element via the style property
 * 7. query style property to get list of all properties available
 */

var main = document.querySelector("main");
console.log("main classlist:", document.querySelector("main").classList);
main.classList.add("test1");
main.classList.add("test2");
console.log("main added classlist:", document.querySelector("main").classList);
main.classList.remove("test2");
console.log("main remove classlist:", document.querySelector("main").classList);
console.log("list attributes:", main.attributes);

var header = main.querySelector("div");
console.log("header attributes", main.querySelector("div").attributes);
header.setAttribute("title", "blue");
console.log("header changed attributes", main.querySelector("div").attributes);
console.log("header style color:", header.style.color);
header.style.color = "rebeccapurple";
console.log("header changed style color:", header.style.color);
console.log("header style list:", header.style);
