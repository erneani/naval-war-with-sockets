const { EVENT_TYPES } = require("../constants");

function startEngine(socket) {
  socket.on(EVENT_TYPES.playerJoined, (username) => {
    console.log(username);
  });
  socket.on(EVENT_TYPES.disconnect, () => {
    console.log("player disconnected");
  });
}

module.exports = { startEngine };
