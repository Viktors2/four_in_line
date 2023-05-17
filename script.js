const board = document.querySelector(".board");
this.template = document.querySelector("#template_cell");

for (let i = 0; i < 100; i++) {
  const newElement = this.template.content.firstElementChild.cloneNode(true);
  this.template.parentElement.append(newElement);
}
