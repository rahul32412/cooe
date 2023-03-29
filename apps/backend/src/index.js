import dotenv from "dotenv";
import db_connect from "./db_utils/db_connect.js";
import server from "./server.js";
import { GameInstance } from "./server.js";
dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT || 8000;
const SERVER_NAME = process.env.SERVER_NAME || "localhost";

const serverIntializer = async () => {
  try {
    await db_connect();
    GameInstance.game();
    server.listen(SERVER_PORT, process.env.SERVER_NAME, () => {
      console.log(`App is running on http://${SERVER_NAME}:${SERVER_PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};
serverIntializer();
