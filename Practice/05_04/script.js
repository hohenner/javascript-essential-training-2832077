/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 *  link to color names: https://htmlcolorcodes.com/color-names/
 */

// by class name
console.log("siteheader class:", document.querySelector(".siteheader"));

console.log(
  "siteheader by getElementsByClass:",
  document.getElementsByClassName("siteheader")
);

var features = document.querySelectorAll(".feature");

features.forEach((item) => (item.style.backgroundColor = "lightblue"));

var backpack_features = document.querySelectorAll(".backpack__features");

backpack_features.forEach(
  (item) =>
    (item.querySelector(".backpack__volume").style.backgroundColor =
      "lightsteelblue")
);

// by element type
var ele = document.querySelector("h1");
console.log("h1:", ele);

var unlist = document.querySelectorAll("ul");

unlist.forEach(
  (item) =>
    (item.querySelector(".backpack__color").style.backgroundColor = "skyblue")
);
