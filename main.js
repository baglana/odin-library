const output = document.querySelector('.output');

const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  const input = prompt('Enter book title: ');
  myLibrary.push(input);
  output.textContent = myLibrary;
}

const btn = document.querySelector('button');
btn.onclick = addBookToLibrary;