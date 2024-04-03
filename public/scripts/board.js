import {
  renderAerocarrier,
  renderBattleship,
  renderCruzader,
  renderHidroPlane,
  renderSubmarine,
} from "./boats.js";
import { BOARD_NAMES, BOATS_MAPPING, ORIENTATIONS } from "./constants.js";
import { gameState } from "./game.js";
import { clearCanvas, renderBoard } from "./render.js";

export let renderState = {
  ctx: null,
  orientation: ORIENTATIONS.horizontal,
};

export function drawBoard() {
  const playerCanvas = document.getElementById("player__canvas");
  const enemyCanvas = document.getElementById("oponent__canvas");

  renderBoard(playerCanvas.getContext("2d"));
  renderBoard(enemyCanvas.getContext("2d"));
}

export function renderPreview(coords) {
  const playerCanvas = document.getElementById("player__canvas");
  renderState.ctx = playerCanvas.getContext("2d");

  clearCanvas(playerCanvas);

  switch (gameState.selectedShip) {
    case BOATS_MAPPING.s:
      renderSubmarine(coords.x, coords.y);
      return;
    case BOATS_MAPPING.q:
      renderAerocarrier(coords.x, coords.y);
      return;
    case BOATS_MAPPING.w:
      renderBattleship(coords.x, coords.y);
      return;
    case BOATS_MAPPING.e:
      renderHidroPlane(coords.x, coords.y);
      return;
    case BOATS_MAPPING.r:
      renderCruzader(coords.x, coords.y);
      return;
    default:
      return;
  }

  renderBoard();
}
