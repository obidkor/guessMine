import { join } from "path";
import express from "express";
import soketio from "socket.io";

const PORT = 4000;
const app = express();
app.set('view engine','pug');
app.set('views', join(__dirname,'views'));
app.use(express.static(join(__dirname,'static')));
app.get("/", (req,res) => res.render("home"))

const handleListiening = () => console.log(`✔🤣 Server ruuning : http://localhost:${PORT}`);

app.listen(PORT,handleListiening);