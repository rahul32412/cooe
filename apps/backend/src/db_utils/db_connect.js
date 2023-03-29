import mongoose from "mongoose";
const db_connect = async () => {
  try {
    await mongoose
      .connect(
        `mongodb://${process.env.MONGO_DB_ATLAS_USER_NAME}:${process.env.MONGO_DB_ATLAS_USER_PASSWORD}@ac-ghxkn38-shard-00-00.ceqtztp.mongodb.net:27017,ac-ghxkn38-shard-00-01.ceqtztp.mongodb.net:27017,ac-ghxkn38-shard-00-02.ceqtztp.mongodb.net:27017/?ssl=true&replicaSet=atlas-axxxkj-shard-0&authSource=admin&retryWrites=true&w=majority`,
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
