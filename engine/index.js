const { EVENT_TYPES } = require("../constants");
const { createGame } = require("./mechanics");

const playersOnLobby = [];

function startEngine(socket) {
  socket.on(EVENT_TYPES.playerJoined, (username) =>
    handleNewPlayer(username, socket)
  );

  socket.on(EVENT_TYPES.disconnect, () => {
    console.log("player disconnected");
  });
}

function handleNewPlayer(username, socket) {
  console.log("inserting player " + username);
  playersOnLobby.push(username);

  if (playersOnLobby.length >= 2) {
    socket.emit(EVENT_TYPES.match, playersOnLobby);
    createGame(playersOnLobby.shift(), playersOnLobby.shift());
  }
}

module.exports = { startEngine };
