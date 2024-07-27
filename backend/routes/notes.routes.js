import { Router } from "express";
import fetchuser from "../middleware/fetchuser.js";
const router = Router();
//Route 1 : Get all the notes of loged in user using :GET "/api/notes/getallnotes" . Login required
router.get("/getallnotes", (req, res) => {
  res.json([]);
});

export default router;
