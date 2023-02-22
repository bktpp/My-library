function Books(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead;
}

const addBtn = document.querySelector('.add-btn');
const addBookCont = document.querySelector('.add-book-cont');
const btnCaption = document.querySelector('.btn-caption');
const formMainCont = document.querySelector('.form-main-cont');
const inputs = document.querySelectorAll('.user-info');
const bookCard = document.querySelector('.book-card');
const booksCont = document.querySelector('.books-cont');

addBtn.addEventListener('click', function() {
    addBookCont.style.display = 'flex';
    btnCaption.textContent = '';
    bookCard.style.backgroundColor = 'rgba(181, 179, 179, 0.5)';
})

const bookForm = document.querySelector('#book-form');

bookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = bookForm.elements.title.value;
    const author = bookForm.elements.author.value;
    const pages = bookForm.elements.pages.value;
    const checkbox = document.querySelector('#is-read');
    const isRead = checkbox.checked;
    const book = new Books(title, author, pages, isRead);

    myLibrary.push(book);
    
    bookForm.elements.title.value = '';
    bookForm.elements.author.value = '';
    bookForm.elements.pages.value = '';
    bookForm.elements['is-read'].checked = false;
    bookCards(myLibrary);  
})
const myLibrary = [];

function bookCards(arg) {
    
    const bookLibrary = document.createElement('div');
    bookLibrary.innerHTML = '';
    
    for (let i = 0; i < arg.length; i++) {
        
        const addedBooks = arg[i];
            
        bookLibrary.innerHTML = `
        <h2>${addedBooks.title}</h2>
        <p>Author: ${addedBooks.author}</p>
        <p>Pages: ${addedBooks.pages}</p>`;

        const readOrNot = document.createElement('button');
        readOrNot.classList.add('read-not-read');
        readOrNot.textContent = `${addedBooks.isRead ? 'Read' : 'Not Read'}`;
        readOrNot.style.backgroundColor = `${addedBooks.isRead ? 'green' : 'red'}`;
        bookLibrary.appendChild(readOrNot);

        readOrNot.addEventListener('click', function() {
            if(addedBooks.isRead === true) {
                readOrNot.textContent = 'Not Read';
                readOrNot.style.backgroundColor = 'red';
                addedBooks.isRead = false;
                console.log(addedBooks.isRead);
            } else {
                readOrNot.textContent = 'Read';
                readOrNot.style.backgroundColor = 'rgb(127, 199, 20)';
                readOrNot.style.color = 'black';
                addedBooks.isRead = true;
            }
        })

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.innerHTML = 'Remove';
        bookLibrary.appendChild(removeButton);
        booksCont.appendChild(bookLibrary);

        removeButton.addEventListener('click', function() {
            const parentDiv = this.parentNode;
            parentDiv.remove();
          })

         readOrNot.addEventListener('click', function() {
         })
        }
      }

   

       
        
      
  












 








