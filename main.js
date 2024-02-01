const output = document.querySelector('output');

const hp1 = new Book('HP1', 'J.K.R');
const hp2 = new Book('HP2', 'J.K.R');
const hp3 = new Book('HP3', 'J.K.R');
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)

const myLibrary = [hp1, hp2, hp3, theHobbit];

function Book(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.getInfo = function() {
  let info = `${this.title} by ${this.author}, ${this.pages} pages`
  if (!this.isRead) {
      info += ', not read yet'
  }
  return info;
}

Book.prototype.toggleReadStatus = function() {
  this.isRead = !this.isRead;
}

function addBookToLibrary() {
  const title = form.elements.namedItem('title').value;
  const author = form.elements.namedItem('author').value;
  const pages = form.elements.namedItem('pages').value;
  const isRead = form.elements.namedItem('isread').value === 'on' ? true : false;
  
  const book = new Book(title, author, pages, isRead);
  book.getInfo();
  myLibrary.push(book);

  displayBooks();
}

function displayBooks() {
    output.innerHTML = '';
    for (const ind in myLibrary) {
        const card = getCardElement(ind);
        output.appendChild(card);
    }
};

function getCardElement(ind) {
  const card = document.createElement('div');

  const book = myLibrary[ind];
  const p = document.createElement('p');
  p.textContent = `${book.title} by ${book.author}`;
  card.appendChild(p);

  const isReadCheckbox = document.createElement('input');
  isReadCheckbox.setAttribute('type', 'checkbox');
  isReadCheckbox.setAttribute('title', 'Read status');
  isReadCheckbox.checked = book.isRead;
  
  isReadCheckbox.onclick = () => {
    book.toggleReadStatus();
    console.log(book.isRead);
    console.log(myLibrary);
  }
  card.appendChild(isReadCheckbox);

  const delBtn = document.createElement('button');
  delBtn.setAttribute('data-ind', ind);
  delBtn.onclick = deleteBookFromLibrary;
  delBtn.textContent = '❌';
  card.appendChild(delBtn);

  card.classList.add('card');
  card.setAttribute('title', book.getInfo());

  return card;
}

window.onload = displayBooks;

function deleteBookFromLibrary(evt) {
  const ind = evt.target.getAttribute('data-ind');
  console.log('ind', ind);
  myLibrary.splice(ind, 1);
  displayBooks();
}