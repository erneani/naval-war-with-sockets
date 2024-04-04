import { renderState } from "./board.js";
import { BOARD_NAMES, ORIENTATIONS, maxUnit, minUnit } from "./constants.js";

export default class Boats {
  board = {};

  constructor(board) {
    this.board = board;
  }

  renderSubmarine(x, y) {
    this.renderShip(1, x, y, BOARD_NAMES.submarine);
  }

  renderCruzader(x, y) {
    this.renderShip(2, x, y, BOARD_NAMES.cruzader);
  }

  renderHidroPlane(x, y) {
    if (x === minUnit) return;
    if (y === minUnit) return;

    if (x - 1 === 0) return;
    if (y + 1 > maxUnit) return;
    if (x + 1 > maxUnit) return;

    this.board[`${x}${y}`] = BOARD_NAMES.hidroplane;
    this.board[`${x - 1}${y + 1}`] = BOARD_NAMES.hidroplane;
    this.board[`${x + 1}${y + 1}`] = BOARD_NAMES.hidroplane;
  }

  renderBattleship(x, y) {
    this.renderShip(4, x, y, BOARD_NAMES.battleship);
  }

  renderAerocarrier(x, y) {
    this.renderShip(5, x, y, BOARD_NAMES.aerocarrier);
  }

  renderShip(shipWidth, x, y, shipElement) {
    if (x === minUnit) return;
    if (y === minUnit) return;

    if (x + shipWidth > maxUnit + 1) return;

    for (let i = 0; i < shipWidth; i++) {
      if (renderState.orientation === ORIENTATIONS.horizontal)
        this.board[`${x + i}${y}`] = shipElement;
      else this.board[`${x}${y + i}`] = shipElement;
    }
  }
}
