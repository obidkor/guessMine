import { join } from "path"; // dir 모듈
import express from "express"; // http 서버 모듈
import socketIO from "socket.io"; // socket 통신 모듈
import logger from "morgan";

const PORT = 5000;
//서버 variable
const app = express();

// config
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

// logger
app.use(logger("dev"));
// static
app.use(express.static(join(__dirname, "static")));

// view resolve
app.get("/", (req, res) => res.render("home"));

// launch message
const handleListiening = () =>
  console.log(`✔🤣 Server ruuning : http://localhost:${PORT}`);

// server 구동(listen)
const server = app.listen(PORT, handleListiening);

// socket variable(아키텍처 : express 위에 socketio)
const io = socketIO.listen(server);

//on : 이벤트 리슨
// socket.emit("name") => 해당 연결된 세션에만 name이벤트 방출
// socket.boardcast.emit("name") => 해당 연결된 세션을 제외한 모든 세션에
//   name 이벤트 방출
io.on("connection", (socket) => {
  //setTimeout(() => socket.broadcast.emit("hello"), 5000);
  socket.on("helloGuys", () => console.log("the client said hello"));
});

//setInterval(() => console.log(sockets), 1000);
