import { renderPreview, renderState } from "./board.js";
import { BOATS_MAPPING, ORIENTATIONS, canvasUnit } from "./constants.js";
import { gameState } from "./game.js";

export function addPreviewListener() {
  const playerCanvas = document.getElementById("player__canvas");

  playerCanvas.addEventListener("mousemove", (e) => {
    renderPreview(getMousePositionAtCanvas(playerCanvas, e));
  });
}

export function getKeyboardStrokes() {
  window.addEventListener("keydown", (e) => {
    switch (e.key.toLowerCase()) {
      case "q":
        gameState.selectedShip = BOATS_MAPPING["q"];
        return;
      case "w":
        gameState.selectedShip = BOATS_MAPPING["w"];
        return;
      case "e":
        gameState.selectedShip = BOATS_MAPPING["e"];
        return;
      case "r":
        gameState.selectedShip = BOATS_MAPPING["r"];
        return;
      case "s":
        gameState.selectedShip = BOATS_MAPPING["s"];
        return;
      case "u":
        renderState.orientation = ORIENTATIONS.vertical;
        return;
      case "i":
        renderState.orientation = ORIENTATIONS.horizontal;
      default:
        gameState.selectedShip = null;
        return;
    }
  });
}

function addMouseListener(action, element) {
  element.addEventListener(action, (e) => {
    gameState.mouseCoords = getMousePositionAtCanvas(element, e);
  });
}

function getMousePositionAtCanvas(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  return calculateUnit(x, y);
}

function calculateUnit(realX, realY) {
  return {
    x: Math.floor(realX / canvasUnit),
    y: Math.floor(realY / canvasUnit),
  };
}
