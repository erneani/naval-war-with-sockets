import Boats from "./boats.js";
import { BOATS_MAPPING, ORIENTATIONS } from "./constants.js";
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

  const previewBoats = new Boats({ ...gameState.player });

  clearCanvas(playerCanvas);

  switch (gameState.selectedShip) {
    case BOATS_MAPPING.s:
      previewBoats.renderSubmarine(coords.x, coords.y);
      break;
    case BOATS_MAPPING.q:
      previewBoats.renderAerocarrier(coords.x, coords.y);
      break;
    case BOATS_MAPPING.w:
      previewBoats.renderBattleship(coords.x, coords.y);
      break;
    case BOATS_MAPPING.e:
      previewBoats.renderHidroPlane(coords.x, coords.y);
      break;
    case BOATS_MAPPING.r:
      previewBoats.renderCruzader(coords.x, coords.y);
      break;
  }

  renderBoard(renderState.ctx, previewBoats.board);
}

export function selectBoat(coords) {
  const previewBoats = new Boats(gameState.player);

  switch (gameState.selectedShip) {
    case BOATS_MAPPING.s:
      previewBoats.renderSubmarine(coords.x, coords.y);
      break;
    case BOATS_MAPPING.q:
      previewBoats.renderAerocarrier(coords.x, coords.y);
      break;
    case BOATS_MAPPING.w:
      previewBoats.renderBattleship(coords.x, coords.y);
      break;
    case BOATS_MAPPING.e:
      previewBoats.renderHidroPlane(coords.x, coords.y);
      break;
    case BOATS_MAPPING.r:
      previewBoats.renderCruzader(coords.x, coords.y);
      break;
  }
}
