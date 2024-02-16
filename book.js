class Book {
  constructor(title, author, pages, isRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  getInfo() {
    let info = `${this.title} by ${this.author}, ${this.pages} pages`
    if (!this.isRead) {
        info += ', not read yet'
    }
    return info;
  }

  toggleReadStatus() {
    this.isRead = !this.isRead;
  }
}