const newBtn = document.getElementById("new");
const dialog = document.getElementById("dialog");
const form = document.querySelector("form");

newBtn.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  dialog.close();
});
