import { drawBoard } from "./board.js";
import { GAME_PHASES } from "./constants.js";
import { INITIAL_BOARD } from "./gameConfig.js";
import { addPreviewListener, getKeyboardStrokes } from "./listeners.js";

export const gameState = {
  player: INITIAL_BOARD,
  enemy: [],
  phase: GAME_PHASES.preparation,
  selectedShip: null,
};

export function gameSetup() {
  console.log(gameState);
  drawBoard();
  startPreparation();
}

function startPreparation() {
  getKeyboardStrokes();
  addPreviewListener();
}
