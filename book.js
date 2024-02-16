class Book {
  #title;
  #author;
  #pages;
  #isRead = false;

  constructor(title, author, pages, isRead) {
    console.log(title, this.#title);
    this.#title = title;
    console.log(title, this.#title);
    this.#author = author;
    this.#pages = pages;
    this.#isRead = isRead;
  }

  getInfo() {
    let info = `${this.#title} by ${this.#author}, ${this.#pages} pages`
    if (!this.#isRead) {
        info += ', not read yet'
    }
    return info;
  }

  toggleReadStatus() {
    this.#isRead = !this.#isRead;
  }
}