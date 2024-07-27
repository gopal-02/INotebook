import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  console.log("Connected to mongoDB successfully...");
};

export default connectDB;
