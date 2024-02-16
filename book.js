class Book {
  #title;
  #author;
  #pages;
  #isRead = false;

  constructor(title, author, pages, isRead) {
    this.#title = title;
    this.#author = author;
    this.#pages = pages;
    this.#isRead = isRead;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get isRead() {
    return this.#isRead;
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