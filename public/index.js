import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
import { gameSetup, gameState, startBattle } from "./scripts/game.js";

const USER_EVENTS = {
  playerJoined: "player_joined",
  match: "game_match",
  playerFinished: "player_finished",
  battleReady: "battle_ready",
};

const SCREENS = {
  login: "login-screen",
  waiting: "waiting-screen",
  game: "game-screen",
};

const socket = io();

let playerName = null;
let playerId = null;
let enemyName = null;

let gameId = null;

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
    playerId,
    board: gameState.player,
    gameId,
  };

  socket.emit(USER_EVENTS.playerFinished, payload);
});

function changeScreen(screenName) {
  const screens = document.querySelectorAll("section");

  screens.forEach((screen) => {
    screen.className = screen.id == screenName ? "" : "hidden";
  });
}

socket.on(USER_EVENTS.match, (payload) => {
  gameId = payload.gameId;

  payload.players.forEach((player) => {
    if (player.username !== playerName) {
      enemyName = player.userName;
    } else {
      playerId = player.id;
    }
  });

  changeScreen(SCREENS.game);
  gameSetup();
});

socket.on(USER_EVENTS.battleReady, (payload) => {
  console.log(payload);
  startBattle();
});
