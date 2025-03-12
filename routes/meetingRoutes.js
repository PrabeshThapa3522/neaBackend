import express from "express";
import { getMeetings, createMeeting, updateMeeting, deleteMeeting } from "../controllers/meetingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", protect, getMeetings);
router.post("/", protect, createMeeting);
router.put("/:id", protect, updateMeeting);
router.delete("/:id", protect, deleteMeeting);

export default router;



