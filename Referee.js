// class Referee {
//   constructor() {
//     this.size = 10;
//   }

//   checkWinner(moves, index) {
//     const symbol = moves[index],
//       x = index % this.size,
//       y = Math.floor(index / this.size);

//     const directions = [
//       [1, 0], // Right
//       [1, 1], // Diagonal right-down
//       [0, 1], // Down
//       [-1, 1], // Diagonal left-down
//     ];

//     for (const [coordX, coordY] of directions) {
//       if (
//         this.checkLine(symbol, x, y, coordX, coordY, moves) +
//           this.checkLine(symbol, x, y, -coordX, -coordY, moves) >=
//         3
//       ) {
//         return true;
//       }
//     }

//     return false;
//   }

//   checkLine(symbol, x, y, coordX, coordY, moves) {
//     let count = 0,
//       newX = x + coordX,
//       newY = y + coordY;

//     while (
//       newX >= 0 &&
//       newX < this.size &&
//       newY >= 0 &&
//       newY < this.size &&
//       symbol === this.getSymbol(newX, newY, moves)
//     ) {
//       count++;
//       newX += coordX;
//       newY += coordY;
//     }

//     return count;
//   }

//   getSymbol(x, y, moves) {
//     if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
//       return null;
//     }

//     const index = y * this.size + x;
//     if (!moves.hasOwnProperty(index)) {
//       return null;
//     }

//     return moves[index];
//   }
// }

class Referee {
  constructor(size = 10) {
    this.size = size;
  }

  checkWinner(moves, index) {
    let match_count;
    this.moves = moves;
    const symbol = moves[index],
      x = index % this.size,
      y = Math.floor(index / this.size);
    const STAY = 0,
      LEFT = -1,
      RIGHT = 1,
      UP = -1,
      DOWN = 1;
    horizontal: {
      match_count = 0;
      match_count += this.countMatchesOneDirection(symbol, y, x, STAY, RIGHT);
      match_count += this.countMatchesOneDirection(symbol, y, x, STAY, LEFT);

      if (match_count >= 3) {
        return true;
      }
    }
    vertical: {
      match_count = 0;
      match_count += this.countMatchesOneDirection(symbol, y, x, DOWN, STAY);

      if (match_count >= 3) {
        return true;
      }
    }
    diagonal: {
      match_count = 0;
      match_count += this.countMatchesOneDirection(symbol, y, x, UP, RIGHT);
      match_count += this.countMatchesOneDirection(symbol, y, x, DOWN, RIGHT);

      if (match_count >= 3) {
        return true;
      }

      match_count = 0;
      match_count += this.countMatchesOneDirection(symbol, y, x, UP, LEFT);
      match_count += this.countMatchesOneDirection(symbol, y, x, DOWN, LEFT);

      if (match_count >= 3) {
        return true;
      }
    }

    return false;
  }

  countMatchesOneDirection(symbol, y, x, direction_y, direction_x) {
    let match_count = 0;
    let currentY = y;
    let currentX = x;

    for (let step = 1; step <= 3; step++) {
      currentY += direction_y;
      currentX += direction_x;

      if (symbol !== this.getSymbol(currentY, currentX)) {
        break;
      }

      match_count++;
    }

    return match_count;
  }

  getSymbol(y, x) {
    if (y < 0 || y >= this.size || x < 0 || x >= this.size) {
      return null;
    }

    const index = y * this.size + x;
    if (!this.moves.hasOwnProperty(index)) {
      return null;
    }

    return this.moves[index];
  }
}
