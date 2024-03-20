const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const gameRouter = require("./routes/gameRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("Welcome to Batalha Naval API (yep, Portuguesenglish)");
});

app.use("/api/game", gameRouter);

io.on("connect", (socket) => {
  console.log("User connected");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000 :]");
});
