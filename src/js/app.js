import Board from "./Board";
import Goblin from "./Goblin";
import GamePlay from "./GamePlay";

const board = new Board();
const char = new Goblin();
const gameplay = new GamePlay(board, char);

gameplay.init();
