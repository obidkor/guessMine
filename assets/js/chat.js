import { getSocket } from "./sockets";

//chat 고나련 function
const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");

// 채팅창 innerhtml
const appendMsg = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `
          <span class="author ${nickname ? "out" : "self"}">${
    nickname ? nickname : "You"
  }:</span> ${text}
      `;
  messages.appendChild(li);
};

// 프론트쪽sendMsg
const handleSendMsg = (event) => {
  event.preventDefault();
  const input = sendMsg.querySelector("input");
  const { value } = input;
  getSocket().emit(window.events.sendMsg, { message: value });
  input.value = "";
  appendMsg(value);
};

//browerify가 안먹음;;;
// export const handleNewMessage = ({ message, nickname }) =>
//   appendMsg(message, nickname);
export const handleNewMessage = (data) => {
  appendMsg(data.message, data.nickname);
};
if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
