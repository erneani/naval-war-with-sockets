import { drawBoard } from "./board.js";
import { BOATS_MAPPING, GAME_PHASES } from "./constants.js";
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
  availableBoards: {
    [BOATS_MAPPING.submarine]: 4,
    [BOATS_MAPPING.aerocarrier]: 1,
    [BOATS_MAPPING.battleship]: 2,
    [BOATS_MAPPING.hidroplane]: 3,
    [BOATS_MAPPING.cruzader]: 3,
  },
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
