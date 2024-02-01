const output = document.querySelector('output');

const hp1 = new Book('HP1', 'J.K.R');
const hp2 = new Book('HP2', 'J.K.R');
const hp3 = new Book('HP3', 'J.K.R');

const myLibrary = [hp1, hp2, hp3];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  const title = form.elements.namedItem('title').value;
  const author = form.elements.namedItem('author').value;
  const pages = form.elements.namedItem('pages').value;
  const isRead = form.elements.namedItem('isread').value;
  const book = new Book(title, author, pages, isRead)
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
    output.innerHTML = '';
    for (const book of myLibrary) {
        const card = document.createElement('div');
        const p = document.createElement('p');
        p.textContent = `${book.title} by ${book.author}`;
        card.appendChild(p);
        card.classList.add('card');
        output.appendChild(card);
    }
};

window.onload = displayBooks;