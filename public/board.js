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

let ctx = null;

export function startGame() {
  const playerCanvas = document.getElementById("player__canvas");
  const enemyCanvas = document.getElementById("oponent__canvas");

  drawBoard(playerCanvas);
  drawBoard(enemyCanvas);
}

export function drawBoard(canvas) {
  ctx = canvas.getContext("2d");

  drawGrill();
  drawGuides();
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

function drawOutlineRect(x, y, style = "default") {
  ctx.strokeStyle = strokeStyles[style];
  ctx.strokeRect(x * canvasUnit, y * canvasUnit, canvasUnit, canvasUnit);
}

function drawText(txt, x, y) {
  ctx.font = "bold 24px serif";
  ctx.textAlign = "center";
  ctx.fillText(txt, x * canvasUnit + halfUnit, y * canvasUnit - quarterUnit);
}
