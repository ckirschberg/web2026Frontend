//alert("Hej Daniel");

const box: HTMLElement | null = document.getElementById("box"); 

box.addEventListener("mouseover", function(event: MouseEvent) {
    // function runs when user clicks on box
    console.log(event);
    this.style.backgroundColor = 'red';
})

box.addEventListener("mouseout", function(event: MouseEvent) {
    box.style.backgroundColor = 'blue'
});


const btn: HTMLElement | null = document.getElementById("btnHover");
const div: HTMLElement | null = document.getElementById("divText");

btn.addEventListener("mouseover", () => {
    div.classList.remove("hidden");
})
btn.addEventListener("mouseout", () => {
    div.classList.add("hidden");
})


const input: any = document.getElementById("inputTodo");
const btnAddTodo: HTMLElement | null = document.getElementById("btnTodo");

//alert(new Date(2026,14,27))

btnAddTodo.addEventListener("click", () => {
    const todoValue = input.value; // retrieve user input
    
    console.log(new Date().toLocaleString());
    // create a new li - element
    const li = document.createElement("li");
    li.title = new Date().toUTCString();
    li.textContent = todoValue; // set its content to ...
    li.addEventListener("click", function() { // add event listener to the new li element
        this.remove(); // remove the li-element the user clicked
    })

    document.getElementById("todos").prepend(li); //add li to ul
    input.value = '';
})

function addErrorLi(errormessage: string): void {
    const li = document.createElement("li") // create li element
    li.textContent = errormessage; // Sets content
    document.getElementById("errors").appendChild(li); // adds li to ul
}


document.getElementById("formUser")
.addEventListener("click", (alexanderErISverige: Event) => {
    alexanderErISverige.preventDefault(); // stops default form behaviour, to send a post request to server

    const firstname = (document.getElementById("firstname") as HTMLInputElement).value;
    const lastname = (document.getElementById("lastname") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    
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
    } else {
        if (!email.includes("@")) {
            addErrorLi("Email must include a @")
        }
    }
    if (password.trim() === "") {
        addErrorLi("Password must be filled out");
    }
    
})


document.getElementById("btnJoke").addEventListener("click", async function() {
    const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist';
    const alexanderSovOverSigOgDetErOk = await fetch(url, {
        method: 'GET'
    })

    // Svarer serveren med en statuskode som er en fejl
    if (!alexanderSovOverSigOgDetErOk.ok) {
        alert("Noget gik galt");
    }

    // Konvertér fra json til javascript repræsentation
    const data = await alexanderSovOverSigOgDetErOk.json(); 
    console.log(data);
    
});


async function signup(myUsername, myPassword) {
    const port = 8080
    const backendUrl = "http://localhost:" + port;
    const response = await fetch(backendUrl, {
        method: 'POST', 
        body: JSON.stringify({username: myUsername, password: myPassword })
    })

    if (!response.ok) {
        alert("Something went wrong signing up");
    }

    const data = await response.json();
    console.log(data);

}


// Dummy data som bliver erstattet af et fetch kald til Python backend'en.
async function getUsers() {
    return [{ firstname: 'Mig', lastname: 'P', email: 'mai@mai.dk', password: 1234},
        { firstname: 'Anarikke', lastname: 'P', email: 'mafdsfadsfi@mai.dk', password: 2345},
        { firstname: 'Lea', lastname: 'P', email: 'dsfaddfsfa@mai.dk', password: 1237},
        { firstname: 'Laura', lastname: 'P', email: 'mfadsfdsafsadfaai@mai.dk', password: 1238}
    ]
}

// waiting on page to load, and then run some js
window.addEventListener("load", async () => {
    const users = await getUsers();

    users.map((user) => {
        const template: any = document.getElementById("template");
        const kopi = template.content.cloneNode(true);

        kopi.getElementById("name").textContent = user.firstname + " " + user.lastname
        kopi.getElementById("email").textContent = user.email + " " + user.email
        kopi.getElementById("password").textContent = user.password

        document.getElementById("userContainer").appendChild(kopi);
    })
    

    // let name = prompt("What is your name?");
    // alert("Hello, " + name);
});

