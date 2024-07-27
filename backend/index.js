import express from "express";
import connectDB from "./db/db.js";
import authRouter from "./routes/auth.routes.js";
import notesRouter from "./routes/notes.routes.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
