class Referee {
  checkWinner(moves, index) {
    const symbol = moves[index];
    this.moves = moves;
    const x = index % 10;
    const y = (index - x) / 10;
    ///Right diagonal
    if (
      symbol == this.getSymbol(y, x + 1) &&
      symbol == this.getSymbol(y, x + 2) &&
      symbol == this.getSymbol(y, x + 3)
    ) {
      return true;
    }
    ///Left diagonal
    if (
      symbol == this.getSymbol(y, x - 1) &&
      symbol == this.getSymbol(y, x - 2) &&
      symbol == this.getSymbol(y, x - 3)
    ) {
      return true;
    }
    ///horizontal
    if (
      symbol == this.getSymbol(y + 1, x) &&
      symbol == this.getSymbol(y + 2, x) &&
      symbol == this.getSymbol(y + 3, x)
    ) {
      return true;
    }
    ///vertical
    if (
      symbol == this.getSymbol(y - 1, x) &&
      symbol == this.getSymbol(y - 2, x) &&
      symbol == this.getSymbol(y - 3, x)
    ) {
      return true;
    }

    return false;
  }

  getSymbol(y, x) {
    if (y < 0 || y > 9 || x < 0 || x > 9) {
      return null;
    }

    const index = y * 10 + x;
    if (!moves.hasOwnProperty(index)) {
      return null;
    }

    return this.moves[index];
  }
}
