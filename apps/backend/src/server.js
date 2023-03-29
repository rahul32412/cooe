import dotenv from "dotenv";
import express from "express";
import http from "http";
import cors from "cors";
import { Server as socketServer } from "socket.io";

// for authentication
import { auth } from "express-oauth2-jwt-bearer";

import Game from "./game/game.js";

dotenv.config();
const GameInstance = new Game();

import orderroutes from "./routes/Order.js";
import userroutes from "./routes/User.js";

import errorMiddleware from "./middlewares/Error.js";

const jwtCheck = auth({
  secret: "xpVjUoePacSFxlwIbTkfPs7maO8TdGUJ",
  audience: "http://api.cooe.com",
  issuerBaseURL: "https://dev-ewmrc8c2y6cijr6g.us.auth0.com/",
  tokenSigningAlg: "HS256",
});

const App = express();
const server = http.createServer(App);
const io = new socketServer(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

App.use(cors());
App.use(express.json());

// Authentication middleware
// App.use(jwtCheck);

// Routes for application

App.use("/order", orderroutes);
App.post("/order/create", GameInstance.createContract);
App.use("/user", userroutes);

App.use(errorMiddleware);

GameInstance.provideIo(io);
io.on("connection", (socket) => {
  socket.join("win-game");
});

export { GameInstance };

export default server;
// This is my server
