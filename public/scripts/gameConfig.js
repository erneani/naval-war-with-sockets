import { BOARD_NAMES } from "./constants.js";

const BOARD_LENGTH = 10;

function generateInitialBoard() {
  const board = {};

  for (let i = 0; i < BOARD_LENGTH; i++) {
    for (let j = 0; j < BOARD_LENGTH; j++) {
      board[`${i}${j}`] = BOARD_NAMES.default;
    }
  }

  return board;
}

export const INITIAL_BOARD = generateInitialBoard();
