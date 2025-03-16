import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  location: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  description: { type: String },
  type: { type: String },
  priority: {
    type: String,
    enum: ['normal', 'high'],
    default: 'normal',
},
  
});

const Meeting = mongoose.model("Meeting", meetingSchema);
export default Meeting;





