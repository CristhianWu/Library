let books = document.querySelector('.books')
let newBook = document.querySelector('.newBook');
let myLibrary = [];
console.log(myLibrary)

function book(name, author, pages, image,readOrNot){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.image = image;
    readOrNot = false; 
}


//Default Books
let book1 = new book('Wish You Were Here', 'Jodi Picoult','pages: 322','book images/WishYouWereHere.jpg');
let book2 = new book('One Little Lie', 'Christopher Greyson','pages: 295', 'book images/OneLittleLie.webp');
let book3 = new book('The Beekeeper of Aleppo', 'Christy Lefteri','pages: 384','book images/TheBeekeeperOfAleppo.webp');
let book4 = new book('The Last Flight', 'Julie Clark','pages: 288', 'book images/TheLastFLight.jpg');
let book5 = new book('The Locked Door', 'Freida McFadden','pages: 311','book images/TheLockedDoor.jpg');
let book6 = new book('Into the Abyss', 'Carol Shaben','pages: 336','book images/intoTheAbyss.jpg');

function defaultBooks(){
    myLibrary.push(book1);
    myLibrary.push(book2);
    myLibrary.push(book3);
    myLibrary.push(book4);
    myLibrary.push(book5);
    myLibrary.push(book6);
}
defaultBooks();

//Displaying books to the page
function displayBooks(){
    for(let i = 0; i<myLibrary.length;i++){
        let newDiv = document.createElement('div');
        newDiv.className = 'theBooks';
        //Insert books to the HTML
        books.appendChild(newDiv);
        //adding info to divs
        function divContent(a){
            //Delete Button
            let deleteButton = document.createElement('button');
            deleteButton.className = 'deleteButton'
            deleteButton.textContent = 'X'
            deleteButton.style.alignSelf = 'flex-start'
            deleteButton.style.margin = '5px'
            deleteButton.style.background = 'none'
            deleteButton.style.border = 'none'
            //Selecting the delete button and make it work
            let index = myLibrary.indexOf(myLibrary[i]);
            deleteButton.addEventListener('click', () =>{
                myLibrary.splice(index, 1);
                console.log(myLibrary);
                remakeLibrary();
            })
            a.appendChild(deleteButton);
            //Book Title
            let name = document.createElement('p');
            name.textContent = myLibrary[i].name
            a.appendChild(name);
            //Book Image
            let image = document.createElement('img');
            image.src = myLibrary[i].image;
            image.style.height = '300px'
            image.style.width = '200px'
            image.style.padding = '10px'
            a.appendChild(image);
            //Book author
            let author = document.createElement('p');
            author.textContent = myLibrary[i].author;
            a.appendChild(author);
            //Book pages
            let page = document.createElement('p');
            page.textContent = myLibrary[i].pages;
            a.appendChild(page);
            //Button for read or not status
            let button = document.createElement('button');
            button.className = 'readOrNot'
            button.textContent = 'Not read yet';
            button.style.marginTop = '10px';
            a.appendChild(button);
        }
        divContent(newDiv);
        //styling the books
        function styling (x){
            x.style.backgroundColor = '#d8e2dc';
            x.style.width = '400px';
            x.style.height = '500px';
            x.style.display = 'flex'
            x.style.flexDirection = 'column'
            x.style.alignItems = 'center'
            x.style.padding = '0x'
        }
        styling(newDiv);
    }
}
displayBooks();

//Remakes the library once a element is deleted
function remakeLibrary(){
    books.innerHTML = '';
    displayBooks();
}