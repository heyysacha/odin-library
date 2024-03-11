const libraryGrid = document.getElementById('library-grid');

const myLibrary = [
    {
        title: 'harry potter',
        author: 'jk rowling',
        pages: 500,
        read: true,
        info()  
        {
        if (this.read)
            {
            return `<h2>${this.title}</h2> <h3>${this.author}</h3> <p>${this.pages} pages long, read</p>`;
            }
        else
            {
            return `<h2>${this.title}</h2> <h3>${this.author}</h3> <p>${this.pages} pages long, not yet read</p>`;
            }
        }
    },
    {
        title: 'harry potter',
        author: 'jk rowling',
        pages: 500,
        read: true,
        info()  
        {
        if (this.read)
            {
            return `<h2>${this.title}</h2> <h3>${this.author}</h3> <p>${this.pages} pages long, read</p>`;
            }
        else
            {
            return `<h2>${this.title}</h2> <h3>${this.author}</h3> <p>${this.pages} pages long, not yet read</p>`;
            }
        }
    }
];

function updateLibrary() 
{
    libraryGrid.innerHTML = '';
    for (let i=0; i < myLibrary.length; i++)
        {
            libraryGrid.insertAdjacentHTML("afterbegin", `<div class="book">${myLibrary[i].info()}</div>`);
        }
};

function Book(title, author, pages, read) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() 
    {
        if (this.read)
            {
            return `<h2>${this.title}</h2> <h3>${this.author}</h3> <p>${this.pages} pages long, read</p>`;
            }
        else
            {
            return `<h2>${this.title}</h2> <h3>${this.author}</h3> <p>${this.pages} pages long, not yet read</p>`;
            }
    }
};

// function newBookButton() {
    
// };


//testing area

const uglies = new Book('uglies', 'scott westerfield', '300', false);

myLibrary.push(uglies);

updateLibrary();