import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => { 
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${db_name}`
    );
    console.log(
      `\nMONGODB connected SUCCESSFULLY!!, DB_Host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection FAILED!!", error);
    process.exit(1);
  }
};

export default connectDB;
