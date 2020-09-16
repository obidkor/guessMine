import { join } from "path"; // dir 모듈
import express from "express"; // http 서버 모듈
import socketIO from "socket.io"; // socket 통신 모듈

const PORT = 5000;
//서버 variable
const app = express();

// config
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

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
const io = socketIO(server);
