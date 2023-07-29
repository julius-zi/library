
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
    let div = document.querySelector(".list span").appendChild(document.createElement("div"));

    /* x button */
    let button = document.createElement("button");
    button.textContent = "x"
    button.classList.add("x")
    div.append(button);
    button.addEventListener("click", removeCard);

    /* Create elements */
    let p1 = div.appendChild(document.createElement("p"));
    p1.classList.add("p1");
    let p2 = div.appendChild(document.createElement("p"));
    p2.classList.add("p2");
    let p3 = div.appendChild(document.createElement("p"));
    p3.classList.add("p3");
    
    /* Output in the DOM */
    if(newBook.alreadyRead) {
        newBook.alreadyRead = "Already read";
        p3.style.color ="green";
    } else {
        newBook.alreadyRead = "Not read yet"
        p3.style.color ="#d65c47";
    }
    p1.innerText += `${newBook.title}\n`
    p2.innerText += `by ${newBook.author}\n`
    p3.innerText += `${newBook.alreadyRead}`

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
