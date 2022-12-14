export default class Goblin {
  constructor() {
    this.char = undefined;
  }

  createChar() {
    const char = document.createElement("div");
    char.classList.add("goblin");
    this.char = char;
  }

  getChar() {
    this.createChar();
    return this.char;
  }
}
