export default class Board {
  constructor() {
    this.board = null;
  }

  createBoard(number) {
    const board = document.createElement("div");
    board.classList.add("board");

    board.classList.add("hammer");

    for (let i = 0; i < Math.floor(number) ** 2; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      board.appendChild(cell);
    }
    this.board = board;
  }

  getBoard(number) {
    this.createBoard(number);
    return this.board;
  }
}
