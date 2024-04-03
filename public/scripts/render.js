import { renderState } from "./board.js";
import {
  canvasUnit,
  halfUnit,
  horizontalGuidelines,
  maxUnit,
  minUnit,
  quarterUnit,
  strokeStyles,
  verticalGuidelines,
} from "./constants.js";

export function renderBoard(newCtx = renderState.ctx) {
  renderState.ctx = newCtx;

  drawGrill();
  drawGuides();
}

export function clearCanvas(canvas) {
  renderState.ctx.clearRect(0, 0, canvas.width, canvas.height);
  renderState.ctx.fillStyle = "";
}

function drawGrill() {
  for (let i = minUnit; i <= maxUnit; i++) {
    for (let j = minUnit; j <= maxUnit; j++) {
      drawOutlineRect(i, j);
    }
  }
}

function drawGuides() {
  for (let i = minUnit + 1; i <= maxUnit; i++) {
    drawText(horizontalGuidelines[i - 1], i, minUnit + 1);
  }

  for (let i = minUnit + 1; i <= maxUnit; i++) {
    drawText(verticalGuidelines[i - 1], minUnit, i + 1);
  }
}

export function drawRect(x, y) {
  renderState.ctx.fillRect(
    x * canvasUnit,
    y * canvasUnit,
    canvasUnit,
    canvasUnit
  );
}

function drawOutlineRect(x, y, style = "default") {
  renderState.ctx.strokeStyle = strokeStyles[style];
  renderState.ctx.strokeRect(
    x * canvasUnit,
    y * canvasUnit,
    canvasUnit,
    canvasUnit
  );
}

function drawText(txt, x, y) {
  renderState.ctx.font = "bold 24px serif";
  renderState.ctx.textAlign = "center";
  renderState.ctx.fillText(
    txt,
    x * canvasUnit + halfUnit,
    y * canvasUnit - quarterUnit
  );
}
