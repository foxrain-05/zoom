import express from "express";
import path from 'path';
import http from 'http';
import { WebSocketServer } from "ws";

const app = express();

app.set("view engine", "pug");
app.set("views", path.resolve() + "/src/views");
app.use("/public", express.static(path.resolve() + "/src/public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/*", (req, res) => {
    res.redirect("/");
});

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

server.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});