function gameControl(gameBoard, controller) {
  let yPosition;
  let xPosition;

  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === "*") {
        yPosition = i;
        xPosition = j;
        gameBoard[i][j] = "";
        break;
      }
    }
  }

  for (let index = 0; index < controller.length; index++) {
    if (controller[index] === "↑" && yPosition > 0) {
      yPosition -= 1;
    } else if (controller[index] === "↓" && yPosition < gameBoard.length - 1) {
      yPosition += 1;
    } else if (controller[index] === "←" && xPosition > 0) {
      xPosition -= 1;
    } else if (controller[index] === "→" && xPosition < gameBoard.length - 1) {
      xPosition += 1;
    }
  }

  gameBoard[yPosition][xPosition] = "*";
  return gameBoard;
}

let board1 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "*", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
// console.log(gameControl(board1, ["↑", "←", "↑", "→"]));
console.log(gameControl(board1, ["↓", "←", "↑", "→", "→", "↑", "→"]));
// console.log(gameControl(board1, ["←", "↓", "→", "↓", "←", "←", "→", "↓"]));
