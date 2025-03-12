import express from "express";
import { loginUser, signupUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", signupUser);


export default router;




