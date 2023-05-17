const board = document.querySelector(".game_board");
this.template = document.querySelector("#template_cell");

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    const new_cell = template.content.firstElementChild.cloneNode(true);
    new_cell.dataset.x = x;
    new_cell.dataset.y = y;
    board.append(new_cell);
  }
}

let symbol = "x";
board.addEventListener("click", boardClickHandle);

function boardClickHandle(e) {
  if (!e.target.classList.contains("cell")) {
    return;
  }

  clickHandle.bind(e.target)();
}

function clickHandle() {
  if (this.textContent !== "") {
    return;
  }
  this.textContent = symbol;
  symbol = symbol === "x" ? "o" : "x";
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
