import { handleMessageNotif } from "./chat";
const socket = io("/");

// message send emit
function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`You : ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

socket.on("messageNotif", handleMessageNotif);
