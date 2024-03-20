const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const gameRouter = require("./routes/gameRoutes");
const { EVENT_TYPES } = require("./constants");
const { startEngine } = require("./engine");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("Welcome to Batalha Naval API (yep, Portuguesenglish)");
});

app.use("/api/game", gameRouter);

io.on(EVENT_TYPES.connect, startEngine);

server.listen(3000, () => {
  console.log("Server listening on port 3000 :]");
});
