var box = document.getElementById("box");
if (box) {
    box.addEventListener("click", function (event) {
        var backgroundColor = box.style.backgroundColor;
        if (backgroundColor === "red") {
            box.style.backgroundColor = "lightblue";
        }
        else {
            box.style.backgroundColor = "red";
        }
    });
}
//# sourceMappingURL=events.js.map