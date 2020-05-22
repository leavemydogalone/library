let myLibrary = [];
let container = document.querySelector('.container');
let bookBox = document.querySelector('.book');
// let template = function(author, )






function Book(author, title, pages, read) {
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.read = read
};

function addBookToLibrary() {
  let newBook = new Book();
  myLibrary.push(newBook);
}

let book1 = new Book ('phil fartman', 'the fartening', 300, 'yes');
let book2 = new Book ('guy person', 'happy cats', 256, 'no');
myLibrary.push(book1, book2);
console.table(myLibrary);

let render = function () {
    for (i = 0; i < myLibrary.length; i++) {
        let newBox = document.createElement('newBox');
        newBox.classList.add('book');
        for (let key in myLibrary[i]) {
            let newPara = document.createElement('p');
            newPara.textContent = `${key}: ${myLibrary[i][key]}`;
            newBox.appendChild(newPara);
            
        };
        container.appendChild(newBox);
    }
}

render();