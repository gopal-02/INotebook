import express from "express";
import connectDB from "./db/db.js";
import authRouter from "./routes/auth.routes.js";
import notesRouter from "./routes/notes.routes.js";

const app = express();
app.use(express.json());
connectDB();
const PORT = 3000;
app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
