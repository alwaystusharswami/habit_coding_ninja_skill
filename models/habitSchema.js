const mongoose = require("mongoose");
const habitSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    time: { type: String, required: true },
    strike: { type: Number, required: true },
    totalDays: { type: Number, required: true },
    totalComplete: { type: Number, required: true },
    day: { type: Number, required: true },
    complete: { type: Boolean },
    User: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    daily: [{ type: mongoose.Schema.Types.ObjectId, ref: "WeeklyDoneHabit" }],
  },
  { timestamps: true }
);
const Habit = mongoose.model("Habit", habitSchema);
module.exports = Habit;
