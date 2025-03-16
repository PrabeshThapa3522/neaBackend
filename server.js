

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import meetingRoutes from "./routes/meetingRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import Meeting from './models/meetingModel.js'; // Adjust the path according to your file structure

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
console.log("JWT_SECRET:", process.env.JWT_SECRET);
app.use("/api/auth", authRoutes);
app.use("/api/meetings", meetingRoutes);


app.post('/api/meetings', async (req, res) => {
    const { date, type, location, description, time, priority } = req.body;

    try {
        const newMeeting = new Meeting({
            date,
            type,
            location,
            description,
            time,
            priority,
        });

        await newMeeting.save(); // Save the meeting to the MongoDB database

        res.status(201).json(newMeeting); // Respond with the saved meeting data
    } catch (error) {
        console.error("Error saving meeting:", error); // Log the full error
        res.status(500).json({ error: "Failed to save meeting", details: error.message }); // Send more detailed error
    }
});





app.use(errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






