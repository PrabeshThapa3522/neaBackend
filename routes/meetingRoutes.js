import express from "express";
import { getMeetings, createMeeting, updateMeeting, deleteMeeting, getData } from "../controllers/meetingController.js";
import { protect, verifyToken } from "../middleware/authMiddleware.js";



const router = express.Router();
router.get("/", protect, getMeetings);
router.post("/meetings", protect, createMeeting);
router.put("/:id", protect, updateMeeting);
router.get('/data', getData);



router.delete("/:id", protect,verifyToken, deleteMeeting);


export default router;













