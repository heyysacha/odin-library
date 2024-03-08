const libraryGrid = document.getElementById('library-grid');

const myLibrary = [
    {
        title: 'harry potter',
        author: 'jk rowling',
        pages: 500,
        read: true,
        info() {
            return `${this.title} by ${this.author}, ${this.pages} pages long, ${this.read}`;
        }
    },
        {
        title: 'harry potter',
        author: 'jk rowling',
        pages: 500,
        read: true,
        info() {
            return `${this.title} by ${this.author}, ${this.pages} pages long, ${this.read}`;
        }
    }
];

for (let i=0; i < myLibrary.length; i++)
{
    console.log(myLibrary[i]);
    libraryGrid.insertAdjacentHTML("afterbegin", `<div class="book">${myLibrary[i].info()}</div>`);
}

// function Book(title, author, pages, read) {
//     return
//         {
//         title: title,
//         author: author,
//         pages: pages,
//         read: read
//         }
// }

// function addBookToLibrary(bookName) {
//   // do stuff here
// }