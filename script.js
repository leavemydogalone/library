let myLibrary = [];
let container = document.querySelector('.container');
let bookBox = document.querySelector('.book');
let addBookButton = document.querySelector('.addBookButton');
addBookButton.addEventListener ('click', addBookToLibrary);

let book1 = new Book ('phil fartman', 'the fartening', 300, 'yes');
let book2 = new Book ('guy person', 'happy cats', 256, 'no');
myLibrary.push(book1, book2);

function Book(author, title, pages, read) {
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.read = read
};

function addBookToLibrary() {
  let title = prompt ('What is the title of the book?','');
  let author = prompt ('Who is the author?', '');
  let pages = prompt('How many pages is the book?', '');
  let read = prompt('Have you read this book? Yes or No.', '');
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  container.textContent = '';
  render();
};

let render = function () {
    for (i = 0; i < myLibrary.length; i++) {
        let newBox = document.createElement('newBox');
        newBox.classList.add('book');
        newBox.setAttribute('id', `book${i}`);
        for (let key in myLibrary[i]) {
            let newPara = document.createElement('p');
            newPara.textContent = `${key}: ${myLibrary[i][key]}`;
            newBox.appendChild(newPara);
        };
        let removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'removeButton')
        removeButton.textContent = 'Remove';
        newBox.appendChild(removeButton);
        container.appendChild(newBox);
    }
}

// let buttonRemove = document.querySelector('.removeButton');
// buttonRemove.addEventListener('click', (e) => {
//         let parent = e.target.parentElement;
//         let boxID = parent.getAttribute('id').toString().charAt(4);
//         myLibrary = myLibrary.splice(boxID, 1);
//         alert(boxID);
//         container.textContent = '';
//         render();
    
// });



render();