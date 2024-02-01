const output = document.querySelector('.output');

const myLibrary = ['hp1', 'hp2', 'hp3', 'hp4', 'hp5', 'hp6', 'hp7'];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  const input = prompt('Enter book title: ');
  myLibrary.push(input);
  displayBooks();
}

(function displayBooks() {
    output.innerHTML = '';
    for (const book of myLibrary) {
        const card = document.createElement('div');
        const title = document.createElement('p');
        title.textContent = book;
        card.appendChild(title);
        card.classList.add('card');
        output.appendChild(card);
    }
})();

const btn = document.querySelector('button');
btn.onclick = addBookToLibrary;