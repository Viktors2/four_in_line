const board = document.querySelector(".game_board");
this.template = document.querySelector("#template_cell");

for (let i = 0; i < 100; i++) {
  const newElement = this.template.content.firstElementChild.cloneNode(true);
  newElement.dataset.id = i;
  this.template.parentElement.append(newElement);
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
  const cells = document.querySelectorAll(".cell"); // get all cells
  for (const cell of cells) {
    cell.textContent = "";
  }
  symbol = "x";
}
