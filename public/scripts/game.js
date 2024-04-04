import { drawBoard } from "./board.js";
import { GAME_PHASES } from "./constants.js";
import { INITIAL_BOARD } from "./gameConfig.js";
import {
  addPreviewClickListener,
  addPreviewListener,
  getKeyboardStrokes,
} from "./listeners.js";

export const gameState = {
  player: INITIAL_BOARD,
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
  addPreviewClickListener();
}
