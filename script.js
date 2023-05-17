const board = document.querySelector(".game_board");
this.template = document.querySelector("#template_cell");
const cells = document.querySelectorAll(".cell");

for (let i = 0; i < 100; i++) {
  const newElement = this.template.content.firstElementChild.cloneNode(true);
  newElement.dataset.id = i;
  this.template.parentElement.append(newElement);
}

let symbol = "x";
board.addEventListener("click", boardClickHandle);

function boardClickHandle(event) {
  if (!event.target.classList.contains("cell")) {
    return;
  }

  clickHandle.bind(event.target)();
}

function clickHandle() {
  if (this.textContent !== "") {
    return;
  }
  this.textContent = symbol;
}
