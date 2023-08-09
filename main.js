
const form = document.querySelector("form")
const modal = document.getElementById("myModal");

/* Open/reduce new book entry form */
document.querySelector(".new-entry-button").addEventListener("click", (e) => {
        modal.style.display = "flex"
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


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
    let toggle_container = div.appendChild(document.createElement("div"));
    let toggle = toggle_container.appendChild(document.createElement("input"));
    toggle.setAttribute("type","checkbox");
    toggle.classList.add("switch_1");

    
    /* Output in the DOM */
    if(newBook.alreadyRead) {
        toggle.checked = true;
        toggle.style.backgroundColor = "rgb(180, 112, 212)"
        newBook.alreadyRead = "Already read";
    } else {
        toggle.checked = false;
        toggle.style.backgroundColor = "#1e2031"
        newBook.alreadyRead = "Not read yet"
    }
    p1.innerText += `${newBook.title}\n`
    p2.innerText += `by ${newBook.author}\n`

    form.classList.add("hide")

 /* Already read toggle switch Listener */
    toggle.addEventListener("click", (e) => {
        if(toggle.checked) {
            toggle.style.backgroundColor = "rgb(170, 100, 202)"
            newBook.alreadyRead = "Already read";
            p3.innerText = `${newBook.alreadyRead}`
        } else {
            toggle.style.backgroundColor = "#1e2031"
            newBook.alreadyRead = "Not read yet";
            p3.innerText = `${newBook.alreadyRead}`
        }
    })

    p3.innerText += `${newBook.alreadyRead}`

    modal.style.display = "none"
}


function removeCard() {
    document.querySelector(".x").parentElement.remove();
}

let btns = document.querySelectorAll(".x");
for (const btn of btns) {
    btn.addEventListener("click", removeCard);
}

document.getElementById("submit").addEventListener("click", addNewBook);
