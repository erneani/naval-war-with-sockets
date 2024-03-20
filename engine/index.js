const { EVENT_TYPES } = require("../constants");
const { createGame } = require("./mechanics");

let playersOnLobby = [];

function startEngine(socket) {
  socket.on(EVENT_TYPES.playerJoined, handleNewPlayer);

  socket.on(EVENT_TYPES.disconnect, () => {
    console.log("player disconnected");
  });
}

function handleNewPlayer(username) {
  console.log("inserting player " + username);
  playersOnLobby.push(username);

  if (playersOnLobby.length >= 2) {
    createGame(playersOnLobby.shift(), playersOnLobby.shift());
  }
}

module.exports = { startEngine };
