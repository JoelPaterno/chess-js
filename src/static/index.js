const resetButton = document.getElementsByClassName("reset-button")[0];
var boxes = document.getElementsByClassName("box");
const rank_pieces = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];
var board_state = "";
//onload = (event) => {setPlayerWhite()};

function clearBoard() {
    for (const i in boxes) {
        boxes[i].innerHTML = "";
    }
}

function setPlayerWhite() {
    for (const i in boxes) {
        if (i < 8) {
            boxes[i].innerHTML = `<img class="piece" id="${rank_pieces[i]}${i}-b" src="static/pieces/${rank_pieces[i]}-b.svg" ondragstart="drag(event);" draggable="true"  ondrop="drop(event);" ondragover="allowDrop(event);"/>`;
        } else if (i > 7 && i < 16 ) {
            boxes[i].innerHTML = `<img class="piece" id="pawn${i}-b" src="static/pieces/pawn-b.svg" ondragstart="drag(event);" draggable="true" ondrop="drop(event);" ondragover="allowDrop(event);"/>`;
        } else if (i > 47 && i < 56) {
            boxes[i].innerHTML = `<img class="piece" id="pawn${i}-w" src="static/pieces/pawn-w.svg" ondragstart="drag(event);" draggable="true" ondrop="drop(event);" ondragover="allowDrop(event);"/>`;
        } else if (i > 55 && i < 64) {
            boxes[i].innerHTML = `<img class="piece" id="${rank_pieces[Math.abs(56-i)]}${i}-w" src="static/pieces/${rank_pieces[Math.abs(56-i)]}-w.svg" ondragstart="drag(event);" draggable="true ondrop="drop(event);" ondragover="allowDrop(event);"/>`;
        }
    }
}

function setPlayerBlack() {
    for (const i in boxes) {
        if (i < 8) {
            boxes[i].innerHTML = `<img class="piece" id="${rank_pieces[i]}${i}-w" src="static/pieces/${rank_pieces[i]}-w.svg" ondragstart="drag(event);" draggable="true" ondrop="drop(event);" ondragover="allowDrop(event);"/>`
        } else if (i > 7 && i < 16 ) {
            boxes[i].innerHTML = `<img class="piece" id="pawn${i}-w" src="static/pieces/pawn-w.svg" ondragstart="drag(event);" draggable="true" ondrop="drop(event);" ondragover="allowDrop(event);"/>`;
        } else if (i > 47 && i < 56) {
            boxes[i].innerHTML = `<img class="piece" id="pawn${i}-b" src="static/pieces/pawn-b.svg" ondragstart="drag(event);" draggable="true" ondrop="drop(event);" ondragover="allowDrop(event);"/>`;
        } else if (i > 55 && i < 64) {
            boxes[i].innerHTML = `<img class="piece" id="${rank_pieces[i+55]}${i}-b" src="static/pieces/${rank_pieces[i+55]}-b.svg" ondragstart="drag(event);" draggable="true" ondrop="drop(event);" ondragover="allowDrop(event);"/>`;
        }
    }
}

function validatePawnMove(pieceId, targetId) {
    //check if peice is black or white
    if (pieceId.charAt(-1) == "b" && pieceId.includes("pawn")) {
        boob
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
    const dataElement = document.getElementById(data);
    //check if target is occupied
    const targetBlock = ev.target.parentElement;

    if (targetBlock) {
        if (targetBlock.classList.contains("box")) {
            console.log("dragged to an occupied block. target: " + targetBlock.classList[0] + " -- dragged element: " + dataElement.src);
            for (const el of targetBlock.children) {
                console.log(el.id + " removed");
                el.remove();
            };
            targetBlock.appendChild(dataElement);
        } else {
            console.log("dragged to a free block");
            ev.target.appendChild(dataElement);
        };
        console.log(data + " moved to " + ev.target.id);
    }
}

module.exports = {
    clearBoard,
    setPlayerWhite,
    setPlayerBlack,
    allowDrop,
    drag,
    drop
};

