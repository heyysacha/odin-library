const libraryGrid = document.getElementById('library-grid');

const newBookBtn = document.getElementById('new-book');
const newBookForm = document.getElementById('book-form');
const addBookBtn = document.getElementById('add-btn');
const cancelBtn = document.getElementById('cancel-btn');
let removeBookBtn = document.getElementsByClassName('remove-book');
let readToggleBtns = document.getElementsByClassName('read-toggle');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = newBookForm.elements.read;
const colorInput = document.getElementById('color');
let fontColorBtns = document.getElementsByClassName('font-color');

const myLibrary = [];

const updateLibrary = () => 
{
    libraryGrid.innerHTML = '';
    
    for (let i=0; i < myLibrary.length; i++)
        {
            libraryGrid.insertAdjacentHTML("beforeend", `${myLibrary[i].info()}`);
            myLibrary[i].backgroundColor();
        };
        
    removeBooks();
    toggleFontColor();
    toggleRead();
};

function Book(title, author, pages, read, color) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.color = color;
    this.fontColor = true;
    this.position = myLibrary.length;
    this.info = function() 
    {
        if (this.read)
            {
            return `<div class="book ${this.fontColor}" id="book-${this.position}">
                <h2>${this.title}</h2>
                <p>by</p>
                <h3>${this.author}</h3>
                <p>${this.pages} pages long, read</p>
                <div class="book-btns">
                <button class="read-toggle">Mark as unread</button> 
                <button class="font-color">Change font color</button>
                <button class="remove-book"
                id=remove-${this.position}>Remove this book</button> 
                </div>
                </div>`;
            }
        else
            {
            return `<div class="book ${this.fontColor}" id="book-${this.position}">
                <h2>${this.title}</h2>
                <p>by</p>
                <h3>${this.author}</h3>
                <p>${this.pages} pages long, not yet read</p>
                <div class="book-btns"> 
                <button class="read-toggle">Mark as read</button> 
                <button class="font-color">Change font color</button>
                <button class="remove-book"
                id=remove-${this.position}>Remove this book</button> 
                </div>
                </div>`;
            }
    };
    this.backgroundColor = function() {
        const divBackground = document.getElementById(`book-${this.position}`);
        divBackground.style.backgroundColor = `${this.color}`;
    };
};


const resetHidden = () => {
    newBookForm.classList.toggle('hidden');
    newBookBtn.classList.toggle('hidden');
    resetForm();
};

function updatePosition() {
    for (let i=0; i < myLibrary.length; i++) {
    myLibrary[i].position = i;
    };
};

function removeBooks() {
    for (let i=0; i < removeBookBtn.length; i++) {
    removeBookBtn[i].addEventListener('click', () => {
        myLibrary.splice(i, 1);
        updatePosition();
        updateLibrary();
    });
};
    
};

const toggleRead = () => {
    for (let i=0; i < readToggleBtns.length; i++) {
        readToggleBtns[i].addEventListener('click', () => {
            myLibrary[i].read = !myLibrary[i].read;
            updateLibrary();
        });
};
};

const resetForm = () => {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.value = 'false';
};

const addNewBook = () => {    
    if (titleInput.value !== '' && authorInput.value !== '' && pagesInput.value !== '')
    {
        if (readInput.value === 'true') {
            myLibrary.push(new Book(`${titleInput.value}`, `${authorInput.value}`, `${pagesInput.value}`, true, `${colorInput.value}`));
        } else {
            myLibrary.push(new Book(`${titleInput.value}`, `${authorInput.value}`, `${pagesInput.value}`, false, `${colorInput.value}`));
        };
        resetForm();
        updateLibrary();
        resetHidden();
    }
    else {
        alert("Please fill out all fields");
    };
};

const toggleFontColor = () => {
    for (let i=0; i < fontColorBtns.length; i++) {
            fontColorBtns[i].addEventListener('click', () => {
                myLibrary[i].fontColor = !myLibrary[i].fontColor;
                updateLibrary();
            })
    };
};

newBookBtn.addEventListener('click', resetHidden);

cancelBtn.addEventListener('click', resetHidden);

addBookBtn.addEventListener('click', addNewBook);

//test books

function testConstructorBooks() {
    myLibrary.push(new Book('Harry Potter', 'J.K. Rowling', '500', true));

    myLibrary.push(new Book('Fight Club', 'Chuck Palahniuk', '250', false, '#aa5050'));

    myLibrary.push(new Book('Uglies', 'Scott Westerfield', '300', true, '#745491'));

    myLibrary.push(new Book('Pretties', 'Scott Westerfield', '300', false, '#b77835'));

    myLibrary.push(new Book('Specials', 'Scott Westerfield', '300', false, '#4d9457'));

    updateLibrary();
};

testConstructorBooks();