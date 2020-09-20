const socket = io("/");

socket.on("hello", () => console.log("somebody joined"));

setInterval(() => socket.emit("helloGuys"), 4000);
