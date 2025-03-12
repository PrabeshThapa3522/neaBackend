import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  location: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  remarks: { type: String },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
});

const Meeting = mongoose.model("Meeting", meetingSchema);
export default Meeting;





