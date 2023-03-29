import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
const db_connect = async () => {
  try {
    await mongoose
      .connect(
        `mongodb+srv://${process.env.MONGO_DB_ATLAS_USER_NAME}:${process.env.MONGO_DB_ATLAS_USER_PASSWORD}@cooe.azdrgyd.mongodb.net/?retryWrites=true&w=majority`,
        { dbName: "cooe" }
      )
      .then(() => {
        console.log("Database connection successfull");
      })
      .catch((error) => {
        console.log(
          "MongoDB Atlas error " +
            error.message +
            "\n To view full log of error do changes in db_utils/db_connect"
        );
        process.exit(1);
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default db_connect;
