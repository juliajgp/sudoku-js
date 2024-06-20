
var numSelected = null;
var tileSelected = null;
var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];

window.onload = function () {
    setGame();
}

function setGame() {
    //digits 1-9
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    //board 9x9
    for (let b = 0; b < 9; b++) {
        for (let d = 0; d < 9; d++) {
            let tile = document.createElement("div");
            tile.id = b.toString() + "-" + d.toString();

            if(board[b][d] != "-") {
                tile.innerText = board[b][d];
                tile.classList.add("tile-start");
            }
            if(b == 2 || b == 5) {
                tile.classList.add("horizontal-line");
            }
            if(d == 2 || d == 5) {
                tile.classList.add("vertical-line");
            }

            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }
}

function selectNumber() {
    if(numSelected != null) {
        numSelected.classList.remove("number-selected");
    }

    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if(numSelected) {
        if(this.innerText != "") {
            return;
        }

        let coords = this.id.split("-");
        let b = parseInt(coords[0]);
        let d = parseInt(coords[1]);

        if(solution[b][d] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }

    }
}