import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";

var socket = io();

document.getElementById("submit-button").addEventListener("click", () => {
  const userName = document.getElementById("name__input").value;

  if (userName.length == 0) return;

  console.log(userName);
});
