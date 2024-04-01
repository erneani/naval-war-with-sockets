import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
import { drawBoard, startGame } from "./board.js";
import { getMousePositionAtCanvas } from "./listeners.js";

const USER_EVENTS = {
  playerJoined: "player_joined",
  match: "game_match",
};

const SCREENS = {
  login: "login-screen",
  waiting: "waiting-screen",
  game: "game-screen",
};

const socket = io();
let playerName = null;

const gameState = {
  player: [],
  enemy: [],
};

document.getElementById("submit-button").addEventListener("click", () => {
  const userName = document.getElementById("name__input").value;

  if (userName.length == 0) return;

  socket.emit(USER_EVENTS.playerJoined, userName);

  playerName = userName;

  changeScreen(SCREENS.waiting);
});

function changeScreen(screenName) {
  const screens = document.querySelectorAll("section");

  screens.forEach((screen) => {
    screen.className = screen.id == screenName ? "" : "hidden";
  });
}

socket.on(USER_EVENTS.match, (msg) => {
  console.log(msg);
  changeScreen(SCREENS.game);
});

startGame();

const playerCanvas = document.getElementById("player__canvas");
const oponentCanvas = document.getElementById("oponent__canvas");

playerCanvas.addEventListener("mousedown", (e) => {
  getMousePositionAtCanvas(playerCanvas, e);
});

oponentCanvas.addEventListener("mousedown", (e) => {
  getMousePositionAtCanvas(oponentCanvas, e);
});
