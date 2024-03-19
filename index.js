const express = require("express");
const http = require("http");

const gameRouter = require("./routes/game/routes");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Welcome to Batalha Naval API (yep, Portuguesenglish)");
});

app.use("/api/game", gameRouter);

server.listen(3000, () => {
  console.log("Server listening on port 3000 :]");
});
