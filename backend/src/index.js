import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import mongoose from "mongoose";
import { db_name } from "./constants.js";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
    console.log("MONGODB CONNECTED SUCCESFULLY!!");

    app.on("error", (error) => {
      console.log("Express app error!!", error);
      throw error;
    });

    app.listen(process.env.PORT || 5000, () => {
      console.log(`App is listening at port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.error("MONGODB CONNECTION FAILED!!", error);
  }
})();
