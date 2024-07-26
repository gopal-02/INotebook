import express, { Router } from "express";
import { User } from "../models/user.model.js";
import { body, validationResult } from "express-validator";
const router = Router();
const app = express();

//Create a user using: POST "/api/auth".
router.post("/", [
  body('name','Enter a valid name').isLength({min:3}),
  body('email','Enter a valid email').isEmail(),
  body('password','Password must be atleast 6 characters').isLength({min:6}),
],(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(user => res.json(user))
  .catch(err =>res.json({err:"Enter a valid email address",message:err.message}));
});

export default router;
