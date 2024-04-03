import { drawBoard } from "./board.js";
import { GAME_PHASES } from "./constants.js";
import { addPreviewListener, getKeyboardStrokes } from "./listeners.js";

export const gameState = {
  player: [],
  enemy: [],
  phase: GAME_PHASES.preparation,
  selectedShip: null,
};

export function gameSetup() {
  drawBoard();
  startPreparation();
}

function startPreparation() {
  getKeyboardStrokes();
  addPreviewListener();
}
