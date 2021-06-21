/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const book1 = new Book(
  "MicroElectronic Circuits",
  "Sedra",
  "Computers",
  "How to build circuits",
  null,
  null,
  null,
  null
);
const book2 = new Book(
  "Explore It!",
  "Elisabeth Hendrickson",
  "Computers",
  "Exploratory Testing",
  null,
  null,
  null,
  null
);

const book3 = new Book(
  "Learning Perl",
  "Schwartz",
  "Computers",
  "programming Perl",
  "02-12-2009",
  "04-12-2009",
  "04-12-2009",
  null
);

const book4 = new Book(
  "Stage Lighting",
  "Richard Pilbrow",
  "Theatre",
  "theatrical Lighting",
  "02-12-2009",
  "04-12-2009",
  "04-12-2009",
  null
);

const book5 = new Book(
  "Hamlet",
  "William Shakespeare",
  "Theatre",
  "Play",
  "02-12-2020",
  null,
  "02-12-2021",
  15
);

console.log("book2:", book2);
console.log("book3:", book3);
console.log("book4:", book4);
console.log("book5:", book5);

console.log("book1:", book1);
console.log(
  "  start date:",
  book1.startDate,
  " finished date:",
  book1.finishedDate,
  " updated date:",
  book1.updatedDate,
  "page number:",
  book1.pageNumber
);
book1.startReading();
console.log("book1 reading:", book1);
console.log(
  "  start date:",
  book1.startDate,
  " finished date:",
  book1.finishedDate,
  " updated date:",
  book1.updatedDate,
  "page number:",
  book1.pageNumber
);
book1.updateReading(100);
console.log("book1 update:", book1);
console.log(
  "  start date:",
  book1.startDate,
  " finished date:",
  book1.finishedDate,
  " updated date:",
  book1.updatedDate,
  "page number:",
  book1.pageNumber
);
book1.finishReading();
console.log("book1 finished:", book1);
console.log(
  "  start date:",
  book1.startDate,
  " finished date:",
  book1.finishedDate,
  " updated date:",
  book1.updatedDate,
  "page number:",
  book1.pageNumber
);
