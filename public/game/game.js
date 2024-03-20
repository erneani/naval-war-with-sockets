import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

const USER_EVENTS = {
  playerJoined: "player_joined",
};

module.exports = {
  EVENT_TYPES,
};

const socket = io();

document.getElementById("submit-button").addEventListener("click", () => {
  const userName = document.getElementById("name__input").value;

  if (userName.length == 0) return;

  socket.emit(USER_EVENTS.playerJoined, userName);
});
