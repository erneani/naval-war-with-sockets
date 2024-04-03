import { renderState } from "./board.js";
import { ORIENTATIONS } from "./constants.js";
import { drawRect } from "./render.js";

export function renderSubmarine(x, y) {
  renderState.ctx.fillStyle = "green";
  renderShip(1, x, y);
}

export function renderCruzader(x, y) {
  renderState.ctx.fillStyle = "orange";
  renderShip(2, x, y);
}

export function renderHidroPlane(x, y) {
  renderState.ctx.fillStyle = "blue";
  drawRect(x, y);
  drawRect(x - 1, y + 1);
  drawRect(x + 1, y + 1);
}

export function renderBattleship(x, y) {
  renderState.ctx.fillStyle = "red";
  renderShip(4, x, y);
}

export function renderAerocarrier(x, y) {
  renderState.ctx.fillStyle = "yellow";
  renderShip(5, x, y);
}

function renderShip(shipWidth, x, y) {
  for (let i = 0; i < shipWidth; i++) {
    if (renderState.orientation === ORIENTATIONS.horizontal) drawRect(x + i, y);
    else drawRect(x, y + i);
  }
}
