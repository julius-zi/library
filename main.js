
const form = document.querySelector("form")

/* Open/reduce new book entry form */
document.querySelector(".new-entry-button").addEventListener("click", (e) => {
    if(form.classList.contains("hide")) {
        form.classList.remove("hide")
    } else {
        form.classList.add("hide")
    }
})


let books = [];

function Book(title, author, alreadyRead) {
    this.title = title
    this.author = author
    this.alreadyRead = alreadyRead
}

/* Book entry dummys */ 
const harryPotter = new Book("Harry Potter", "J. K. Rowling", true)
books.push(harryPotter);
const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", false)
books.push(theHobbit);

books.forEach(book => {
    let p = document.querySelector(".list span").appendChild(document.createElement("p"));
    p.innerText += `${book.title} by ${book.author}, Already read? ${book.alreadyRead}`
    let button = document.createElement("button");
    button.textContent = "x"
    button.classList.add("x")
    p.append(button);
})

/* Save new book entry as Object and display it in DOM */
function addNewBook(e) {
    e.preventDefault();
    let newBook = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("alreadyRead").checked
    )
    books.push(newBook);
    document.querySelector("form").reset();
    let p = document.querySelector(".list span").appendChild(document.createElement("p"));
    p.innerText += `${newBook.title} by ${newBook.author}, Already read? ${newBook.alreadyRead}`
    let button = document.createElement("button");
    button.textContent = "x"
    button.classList.add("x")
    p.append(button);
    button.addEventListener("click", removeCard);
    form.classList.add("hide")

}

function removeCard() {
    document.querySelector(".x").parentElement.remove();
}

let btns = document.querySelectorAll(".x");
for (const btn of btns) {
    btn.addEventListener("click", removeCard);
}

document.getElementById("submit").addEventListener("click", addNewBook);
