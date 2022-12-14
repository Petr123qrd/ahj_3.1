import Board from "../Board";
import Goblin from "../Goblin";

test("создание игрового поля", () => {
  const board = new Board();
  const field = board.getBoard(4);
  const received = field.querySelectorAll(".cell");
  expect(received.length).toBe(4 ** 2);
});

test("создание персонажа", () => {
  const goblin = new Goblin();
  const char = goblin.getChar();
  const received = char.classList.contains("goblin");
  expect(received).toBeTruthy();
});
