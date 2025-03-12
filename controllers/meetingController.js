import Meeting from "../models/meetingModel.js";

export const getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.json(meetings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createMeeting = async (req, res) => {
  const { location, date, time, remarks } = req.body;
  try {
    const newMeeting = new Meeting({ location, date, time, remarks });
    await newMeeting.save();
    res.status(201).json(newMeeting);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateMeeting = async (req, res) => {
  try {
    const updatedMeeting = await Meeting.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMeeting);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteMeeting = async (req, res) => {
  try {
    await Meeting.findByIdAndDelete(req.params.id);
    res.json({ message: "Meeting deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


