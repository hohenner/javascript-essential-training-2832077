/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Book {
  constructor(
    // Defines parameters:
    title,
    author,
    category,
    description,
    startDate,
    finishedDate,
    updatedDate,
    pageNumber
  ) {
    // Define properties:
    this.title = title;
    this.author = author;
    this.category = category;
    this.description = description;
    this.startDate = Date.parse(startDate);
    this.finishedDate = Date.parse(finishedDate);
    this.updatedDate = Date.parse(updatedDate);
    this.pageNumber = pageNumber;
  }
  // Add methods like normal functions:
  startReading() {
    this.startDate = Date.now();
    this.updatedDate = this.startDate;
    this.pageNumber = 1;
  }
  finishReading() {
    this.finishedDate = Date.now();
    this.updatedDate = this.finishedDate;
    this.pageNumber = null;
  }

  updateReading(pageNumber) {
    this.updatedDate = Date.now();
    this.pageNumber = pageNumber;
  }
}

export default Book;
