export const strokeStyles = {
  default: "rgba(0 0 0 / 30%)",
};

export const canvasUnit = 36.363;
export const halfUnit = canvasUnit / 2;
export const quarterUnit = halfUnit / 2;
export const maxUnit = 10;
export const minUnit = 0;

export const verticalGuidelines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const horizontalGuidelines = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
];

export const GAME_PHASES = {
  preparation: 0,
  battle: 1,
};

export const BOATS_MAPPING = {
  q: "aerocarrier",
  w: "battleship",
  e: "hidroplane",
  s: "submarine",
  r: "cruzader",
};

export const ORIENTATIONS = {
  horizontal: 0,
  vertical: 1,
};

export const BOARD_NAMES = {
  submarine: "s",
  aerocarrier: "q",
  battleship: "w",
  hidroplane: "e",
  submarine: "s",
  cruzader: "r",
  default: ".",
  missedBomb: "m",
  hitBomb: "x",
};
