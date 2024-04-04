const { v4 } = require("uuid");
const { EVENT_TYPES } = require("../constants");

const system = {
  games: {},
  playersOnline: [],
  playersSocket: {},
};

function startEngine(socket) {
  socket.on(EVENT_TYPES.playerJoined, (username) =>
    handleNewPlayer(username, socket)
  );

  socket.on(EVENT_TYPES.disconnect, () => {
    console.log("player disconnected");
  });

  socket.on(EVENT_TYPES.playerFinished, (payload) => {
    const game = system.games[payload.gameId];
    game.boards[payload.playerId] = payload.board;

    game.playersFinished.push(payload.playerId);

    if (game.playersFinished.length >= 2) {
      game.playersFinished.forEach((playerId) =>
        system.playersSocket[playerId].emit(EVENT_TYPES.battleReady)
      );
    }

    console.log(game);
  });
}

function handleNewPlayer(username, socket) {
  const player = {
    username,
    id: v4(),
  };

  system.playersOnline.push(player);
  system.playersSocket[player.id] = socket;

  if (system.playersOnline.length >= 2) {
    const playerA = system.playersOnline.shift();
    const playerB = system.playersOnline.shift();

    const gameUUID = v4();

    system.playersSocket[playerA.id].emit(EVENT_TYPES.match, {
      gameId: gameUUID,
      players: [playerA, playerB],
    });

    system.playersSocket[playerB.id].emit(EVENT_TYPES.match, {
      gameId: gameUUID,
      players: [playerA, playerB],
    });

    system.games[gameUUID] = {
      playersFinished: [],
      boards: {},
    };
  }
}

module.exports = { startEngine };
