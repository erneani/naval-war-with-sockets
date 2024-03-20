import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

const USER_EVENTS = {
  playerJoined: "player_joined",
};

const SCREENS = {
  login: "login-screen",
  waiting: "waiting-screen",
  game: "game-screen",
};

const socket = io();
changeScreen(SCREENS.login);

document.getElementById("submit-button").addEventListener("click", () => {
  const userName = document.getElementById("name__input").value;

  if (userName.length == 0) return;

  socket.emit(USER_EVENTS.playerJoined, userName);
  changeScreen(SCREENS.waiting);
});

function changeScreen(screenName) {
  const screens = document.querySelectorAll("section");

  screens.forEach((screen) => {
    screen.className = screen.id == screenName ? "" : "hidden";
  });
}
