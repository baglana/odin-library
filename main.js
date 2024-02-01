const output = document.querySelector('.output');

const hp1 = new Book('HP1', 'J.K.R');
const hp2 = new Book('HP2', 'J.K.R');
const hp3 = new Book('HP3', 'J.K.R');

const myLibrary = [hp1, hp2, hp3];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  const title = prompt('Enter book title: ');
  const author = prompt('Enter book author: ');
  const book = new Book(title, author)
  myLibrary.push(book);
  displayBooks();
}

(function displayBooks() {
    output.innerHTML = '';
    for (const book of myLibrary) {
        const card = document.createElement('div');
        const p = document.createElement('p');
        p.textContent = `${book.title} by ${book.author}`;
        card.appendChild(p);
        card.classList.add('card');
        output.appendChild(card);
    }
})();

const btn = document.querySelector('button');
btn.onclick = addBookToLibrary;