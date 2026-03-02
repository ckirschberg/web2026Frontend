import { getUsers } from "./api-functions";
//alert("Hej Daniel");
const box = document.getElementById("box");
box.addEventListener("mouseover", function (event) {
    // function runs when user clicks on box
    console.log(event);
    this.style.backgroundColor = 'red';
});
box.addEventListener("mouseout", function (event) {
    box.style.backgroundColor = 'blue';
});
const btn = document.getElementById("btnHover");
const div = document.getElementById("divText");
btn.addEventListener("mouseover", () => {
    div.classList.remove("hidden");
});
btn.addEventListener("mouseout", () => {
    div.classList.add("hidden");
});
const input = document.getElementById("inputTodo");
const btnAddTodo = document.getElementById("btnTodo");
//alert(new Date(2026,14,27))
btnAddTodo.addEventListener("click", () => {
    const todoValue = input.value; // retrieve user input
    console.log(new Date().toLocaleString());
    // create a new li - element
    const li = document.createElement("li");
    li.title = new Date().toUTCString();
    li.textContent = todoValue; // set its content to ...
    li.addEventListener("click", function () {
        this.remove(); // remove the li-element the user clicked
    });
    document.getElementById("todos").prepend(li); //add li to ul
    input.value = '';
});
// Keep it DRY - Dont Repeat Yourself
function addErrorLi(errormessage) {
    const li = document.createElement("li"); // create li element
    li.textContent = errormessage; // Sets content
    document.getElementById("errors").appendChild(li); // adds li to ul
}
document.getElementById("formUser")
    .addEventListener("click", (alexanderErISverige) => {
    alexanderErISverige.preventDefault(); // stops default form behaviour, to send a post request to server
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(firstname, lastname, email, password);
    //const errors = document.getElementById("errors");
    document.getElementById("errors").textContent = "";
    if (firstname.trim() === "") {
        addErrorLi("Firstname must be filled out");
    }
    if (lastname.trim() === "") {
        addErrorLi("Lastname must be filled out");
    }
    if (email.trim() === "") {
        addErrorLi("Email must be filled out");
    }
    else {
        if (!email.includes("@")) {
            addErrorLi("Email must include a @");
        }
    }
    if (password.trim() === "") {
        addErrorLi("Password must be filled out");
    }
});
document.getElementById("btnJoke").addEventListener("click", async function () {
    const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist';
    const x = await fetch(url, {
        method: 'GET'
    });
    // Svarer serveren med en statuskode som er en fejl
    if (!x.ok) {
        alert("Noget gik galt");
    }
    // Konvertér fra json til javascript repræsentation
    const data = await x.json();
    console.log(data);
});
async function signup(myUsername, myPassword) {
    const port = 8080;
    const backendUrl = "http://localhost:" + port;
    const response = await fetch(backendUrl, {
        method: 'POST',
        body: JSON.stringify({ username: myUsername, password: myPassword })
    });
    if (!response.ok) {
        alert("Something went wrong signing up");
    }
    const data = await response.json();
    console.log(data);
}
// waiting on page to load, and then run some js
window.addEventListener("load", async () => {
    const users = await getUsers();
    users.map((user) => {
        const template = document.getElementById("template");
        const kopi = template.content.cloneNode(true);
        kopi.getElementById("name").textContent = user.firstname + " " + user.lastname;
        kopi.getElementById("email").textContent = user.email + " " + user.email;
        kopi.getElementById("password").textContent = user.password;
        document.getElementById("userContainer").appendChild(kopi);
    });
    // let name = prompt("What is your name?");
    // alert("Hello, " + name);
});
//# sourceMappingURL=events.js.map