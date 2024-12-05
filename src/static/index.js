const resetButton = document.getElementsByClassName("reset-button")[0];
var boxes = document.getElementsByClassName("box");
const rank_pieces = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]
onload = (event) => {setPlayerWhite()};

function clearBoard() {
    for (const i in boxes) {
        boxes[i].innerHTML = "";
    }
}

function setPlayerWhite() {
    for (const i in boxes) {
        if (i < 8) {
            boxes[i].innerHTML = `<img class="piece" id="${rank_pieces[i]}${i}-b" src="static/pieces/${rank_pieces[i]}-b.svg" ondragstart="drag(event);" draggable="true"/>`;
        } else if (i > 7 && i < 16 ) {
            boxes[i].innerHTML = `<img class="piece" id="pawn${i}-b" src="static/pieces/pawn-b.svg" ondragstart="drag(event);" draggable="true"/>`;
        } else if (i > 47 && i < 56) {
            boxes[i].innerHTML = `<img class="piece" id="pawn${i}-w" src="static/pieces/pawn-w.svg" ondragstart="drag(event);" draggable="true"/>`;
        } else if (i > 55 && i < 64) {
            boxes[i].innerHTML = `<img class="piece" id="${rank_pieces[Math.abs(56-i)]}${i}-w" src="static/pieces/${rank_pieces[Math.abs(56-i)]}-w.svg" ondragstart="drag(event);" draggable="true"/>`;
        }
    }
}

function setPlayerBlack() {
    for (const i in boxes) {
        for (const i in boxes) {
            if (i < 8) {
                boxes[i].innerHTML = `<img class="piece" id="${rank_pieces[i]}${i}-w" src="static/pieces/${rank_pieces[i]}-w.svg" ondragstart="drag(event);" draggable="true"/>`
            } else if (i > 7 && i < 16 ) {
                boxes[i].innerHTML = `<img class="piece" id="pawn${i}-w" src="static/pieces/pawn-w.svg" ondragstart="drag(event);" draggable="true"/>`;
            } else if (i > 47 && i < 56) {
                boxes[i].innerHTML = `<img class="piece" id="pawn${i}-b" src="static/pieces/pawn-b.svg" ondragstart="drag(event);" draggable="true"/>`;
            } else if (i > 55 && i < 64) {
                boxes[i].innerHTML = `<img class="piece" id="${rank_pieces[i+55]}${i}-b" src="static/pieces/${rank_pieces[i+55]}-b.svg" ondragstart="drag(event);" draggable="true"/>`;
            }
        }
    }
}

resetButton.addEventListener("click", (event) => {
    console.log("reset board clicked");
    clearBoard();
    setPlayerWhite();
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


