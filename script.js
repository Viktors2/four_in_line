const board = document.querySelector(".game_board");
this.template = document.querySelector("#template_cell");
const cells = document.querySelectorAll(".cell");
let index = 0;

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    const new_cell = template.content.firstElementChild.cloneNode(true);
    new_cell.dataset.x = x;
    new_cell.dataset.y = y;
    new_cell.dataset.index = index;
    board.append(new_cell);
    index++;
    // new_cell.textContent = index;
    new_cell.addEventListener("click", clickHandle);
  }
}

let i = 82;
board.children[i].style.background = "lightgreen";
board.children[i + 10].style.background = "lightyellow";
board.children[i + 1].style.background = "lightblue";
board.children[i - 1].style.background = "lightpink";

let symbol = "x";
let moves = [];
let referee = new Referee();

// where players can put their symbols (board.children)
// clickedHandle function
// must know the coordinates of the clicked cell like x,y and index
// example clickedCell = {x: 4, y: 9, index: 94}
//so it allowed to put symbols into:
//x: 4, y: 8, index: 84  [y - 1] [index - 10] to top
// x: 3, y: 9, index: 93 [x - 1] [y + 1] [index - 1] to left
// x: 5, y: 9, index: 95 [x + 1] [y + 1] [index + 1] to right
// but only if textContent !== ""

function clickHandle() {
  const index = Number(this.dataset.index);
  const x = Number(this.dataset.x);
  const y = Number(this.dataset.y);
  if (moves.hasOwnProperty(index)) {
    return;
  }
  if (index < 90 && !moves.hasOwnProperty(index + 10)) {
    return;
  }
  this.textContent = symbol;
  console.log(
    "symbol: " +
      symbol +
      ", " +
      "x: " +
      this.dataset.x +
      ", y: " +
      this.dataset.y +
      ", index: " +
      this.dataset.index
  );
  symbol = symbol === "x" ? "o" : "x";
  moves[index] = symbol;

  if (referee.checkWinner(moves, symbol, index, x, y)) {
    console.log("Player " + symbol + " has won the game!");
  }
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", resetHandle);

function resetHandle() {
  console.log("reset");
  const cells = document.querySelectorAll(".cell");
  for (const cell of cells) {
    cell.textContent = "";
  }
  symbol = "x";
}
