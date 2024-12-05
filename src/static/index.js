const resetButton = document.getElementsByClassName("reset-button")[0];
var boxes = document.getElementsByClassName("box")

function clearBoard() {
    for (const i in boxes) {
        boxes[i].innerHTML = "";
    }
}

function setPlayerWhite() {
    for (const i in boxes) {

    }
}

function setPlayerBlack() {
    for (const i in boxes) {

    }
}

resetButton.addEventListener("click", (event) => {
    console.log("reset board clicked");
    clearBoard();
})

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(data + " moved to " + ev.target.id);
}


