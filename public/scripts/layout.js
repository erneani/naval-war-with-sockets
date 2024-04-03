const USER_EVENTS = {
    playerJoined: "player_joined",
    match: "game_match",
  };
  
  const SCREENS = {
    login: "login-screen",
    waiting: "waiting-screen",
    game: "game-screen",
  };
  
  document.getElementById("submit-button").addEventListener("click", () => {
    const userName = document.getElementById("name__input").value;
  
    if (userName.length == 0) return;
  
    socket.emit(USER_EVENTS.playerJoined, userName);
  
    playerName = userName;
  
    changeScreen(SCREENS.waiting);
  });
  
  function changeScreen(screenName) {
    const screens = document.querySelectorAll("section");
  
    screens.forEach((screen) => {
      screen.className = screen.id == screenName ? "" : "hidden";
    });
  }
  