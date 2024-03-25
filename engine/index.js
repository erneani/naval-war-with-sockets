const { EVENT_TYPES } = require("../constants");
const { createGame } = require("./mechanics");

const playersOnLobby = [];
const playerSockets = {};

const system = {
  games: [],
};

function startEngine(socket) {
  socket.on(EVENT_TYPES.playerJoined, (username) =>
    handleNewPlayer(username, socket)
  );

  socket.on(EVENT_TYPES.disconnect, () => {
    console.log("player disconnected");
  });
}

function handleNewPlayer(username, socket) {
  playersOnLobby.push(username);
  playerSockets[username] = socket;

  if (playersOnLobby.length >= 2) {
    playersOnLobby.forEach((player) => {
      playerSockets[player].emit(EVENT_TYPES.match, playersOnLobby);
    });
    createGame(system, playersOnLobby.shift(), playersOnLobby.shift());
  }
}

module.exports = { startEngine };
