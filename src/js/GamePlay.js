export default class GamePlay {
  constructor(board, char) {
    this.board = board;
    this.boardSize = 4;
    this.char = char;
    this.activeChar = null;
    this.boardListeners = [];
  }

  init() {
    this.redrawBoard();

    this.board.addEventListener("click", this.onBoardClick.bind(this));

    this.start();
  }

  redrawBoard() {
    this.board = this.board.getBoard(this.boardSize);
    const body = document.querySelector("body");
    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = "<h1 class='title'>Битва гоблинов!</h1>";
    this.counter = this.createGoblinCounter();
    container.appendChild(this.counter);
    container.appendChild(this.board);
    body.insertBefore(container, body.firstChild);
    this.cells = [...this.board.children];
  }

  createGoblinCounter() {
    this.goblinCounter = document.createElement("div");
    this.goblinCounter.classList.add("status");
    this.goblinCounter.innerHTML =
      'Убито гоблинов:<span class="dead">0</span><br>Промахов: <span class="lost">0</span><br>';
    return this.goblinCounter;
  }

  onBoardClick(event) {
    event.preventDefault();
    this.dead = document.querySelector(".dead");
    this.lost = document.querySelector(".lost");
    this.boardListeners.forEach((callback) => callback(event.target));

    if (event.target.classList.contains("goblin")) {
      ++this.dead.textContent;
      event.target.classList.remove("goblin");
    } else {
      ++this.lost.textContent;
    }

    if (this.dead.textContent >= 10) {
      this.resetScore();
      alert("Победа!!"); // eslint-disable-line no-alert
    }

    if (this.lost.textContent >= 5) {
      this.resetScore();
      alert("Поражение!"); // eslint-disable-line no-alert
    }

    this.changeCursor();
  }

  generateposition() {
    const position = Math.floor(Math.random() * this.boardSize ** 2);
    if (position === this.position) {
      this.generateposition();
      return;
    }
    this.deletedChar();
    this.position = position;
    this.adventChar();
  }

  deletedChar() {
    if (this.activeChar === null) {
      return;
    }
    this.cells[this.position].firstChild.remove();
  }

  adventChar() {
    this.activeChar = this.char.getChar();
    this.cells[this.position].appendChild(this.activeChar);
  }

  resetScore() {
    this.lost.textContent = 0;
    this.dead.textContent = 0;
  }

  changeCursor() {
    this.board.classList.toggle("hammer");
    this.board.classList.toggle("hammer-boom");
  }

  start() {
    setInterval(() => {
      this.generateposition();
    }, 1000);
  }
}
