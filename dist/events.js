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
// waiting on page to load, and then run some js
window.addEventListener("load", () => {
    // let name = prompt("What is your name?");
    // alert("Hello, " + name);
});
alert(new Date(2026, 14, 27));
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
//# sourceMappingURL=events.js.map