const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const options = {
    root: __dirname,
  };

  res.status(200).sendFile("/game.html", options);
});

module.exports = router;
