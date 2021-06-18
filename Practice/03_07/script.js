/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const drink = {
    type: "tea",
    temperature: "hot",
    changeTemp: function (temp) {
        this.temperature = temp
    },
}
const cup = {
    color: "blue",
    handle: true,
    volume: 10,
    writing: false,
    picture: false,
    full: true,
    contents: drink,
    emptyCup: function () {
        this.full = false;
        this.contents = null;
      },
    fillCup: function () {
        this.full = true;
        this.contents = drink;
    }
}

console.log("The cup object:", cup);
console.log("drink is ",drink)