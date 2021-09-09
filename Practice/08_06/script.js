/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 *
 * - create function
 * - create variable function
 * - create arrow function
 */

function addElement(value) {
  const newElement = document.createElement("article");
  newElement.innerHTML = `<h1>${value}</h1>`;
  return newElement;
}

const main = document.querySelector("main");
main.append(addElement("bob"));

const addElement1 = function (value) {
  const newElement = document.createElement("article");
  newElement.innerHTML = `<h1>${value}</h1>`;
  return newElement;
};

main.append(addElement1("bob1"));

const addElement2 = (value) => {
  const newElement = document.createElement("article");
  newElement.innerHTML = `<h1>${value}</h1>`;
  return newElement;
};

main.append(addElement2("bob2"));
