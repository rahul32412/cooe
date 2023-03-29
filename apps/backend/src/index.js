import dotenv from "dotenv";
import db_connect from "./db_utils/db_connect.js";
import server from "./server.js";
import { GameInstance } from "./server.js";
dotenv.config();

const serverIntializer = async () => {
  try {
    await db_connect();
    GameInstance.game();
    server.listen(process.env.SERVER_PORT, process.env.SERVER_NAME, () => {
      console.log(
        `App is running on http://${process.env.SERVER_NAME}:${process.env.SERVER_PORT}`
      );
    });
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};
serverIntializer();
