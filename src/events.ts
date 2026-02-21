const box: HTMLElement | null = document.getElementById("box");

if (box) {
    box.addEventListener("click", function(event: MouseEvent): void {    
        const backgroundColor: string = box.style.backgroundColor;

        if (backgroundColor === "red") {
            box.style.backgroundColor = "lightblue";
        } else {
            box.style.backgroundColor = "red";
        }
    });
}