const { initSockets } = require("./sockets");

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

//login시
const logIn = (nickname) => {
  // globalize socket variable(window.socket)
  // eslint-disable-next-line no-undef
  const socket = io("/");
  socket.emit(window.events.setNickname, { nickname });
  initSockets(socket);
};

// 로그인 체크
if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  // io connection
  logIn(nickname);
}

//로컬 저장소 저장
const handleFormSubmit = (e) => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
