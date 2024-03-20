const express = require("express");
const path = require("path");
const router = express.Router();

router.use(express.static(path.join(__dirname, "..", "public", "game")));

router.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname, "..", "public", "game"),
  };

  res.status(200).sendFile("game.html", options);
});

module.exports = router;
