import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
import { gameSetup, gameState } from "./scripts/game.js";
import { GAME_PHASES } from "./scripts/constants.js";

const USER_EVENTS = {
  playerJoined: "player_joined",
  match: "game_match",
  playerFinished: "player_finished",
};

const SCREENS = {
  login: "login-screen",
  waiting: "waiting-screen",
  game: "game-screen",
};

const socket = io();
let playerName = null;

document.getElementById("submit-button").addEventListener("click", () => {
  const userName = document.getElementById("name__input").value;

  if (userName.length == 0) return;

  socket.emit(USER_EVENTS.playerJoined, userName);

  playerName = userName;

  changeScreen(SCREENS.waiting);
});

document.getElementById("finish-preparation").addEventListener("click", () => {
  if (Object.values(gameState.availableBoards).some((x) => x !== 0)) {
    return alert("Você deve inserir todas as embarcações no tabuleiro.");
  }

  const payload = {
    username: playerName,
    board: gameState.player,
  };

  socket.emit(USER_EVENTS.playerFinished, playerName);
  gameState.phase = GAME_PHASES.battle;
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

gameSetup();
