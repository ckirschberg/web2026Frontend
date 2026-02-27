//alert("Hej Daniel");
var box = document.getElementById("box");
box.addEventListener("mouseover", function (event) {
    // function runs when user clicks on box
    console.log(event);
    this.style.backgroundColor = 'red';
});
box.addEventListener("mouseout", function (event) {
    box.style.backgroundColor = 'blue';
});
var btn = document.getElementById("btnHover");
var div = document.getElementById("divText");
btn.addEventListener("mouseover", function () {
    div.classList.remove("hidden");
});
btn.addEventListener("mouseout", function () {
    div.classList.add("hidden");
});
var input = document.getElementById("inputTodo");
var btnAddTodo = document.getElementById("btnTodo");
// waiting on page to load, and then run some js
window.addEventListener("load", function () {
    // let name = prompt("What is your name?");
    // alert("Hello, " + name);
});
alert(new Date(2026, 14, 27));
btnAddTodo.addEventListener("click", function () {
    var todoValue = input.value; // retrieve user input
    console.log(new Date().toLocaleString());
    // create a new li - element
    var li = document.createElement("li");
    li.title = new Date().toUTCString();
    li.textContent = todoValue; // set its content to ...
    li.addEventListener("click", function () {
        this.remove(); // remove the li-element the user clicked
    });
    document.getElementById("todos").prepend(li); //add li to ul
    input.value = '';
});
document.getElementById("formUser")
    .addEventListener("click", function (alexanderErISverige) {
    alexanderErISverige.preventDefault(); // stops default form behaviour, to send a post request to server
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(firstname, lastname, email, password);
});
//# sourceMappingURL=events.js.map