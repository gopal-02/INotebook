import express,{ Router } from "express";
import {User} from "../models/user.model.js";
const router = Router();
const app = express();

router.post("/", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save();
  res.send(req.body);
});

export default router;
