import { join } from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 5000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));
const handleListiening = () =>
  console.log(`✔🤣 Server ruuning : http://localhost:${PORT}`);

const server = app.listen(PORT, handleListiening);

const io = socketIO(server);
