import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`)
  } catch (error) {
    console.error("MONGODB not connected successfully", error);
  }
})();
  