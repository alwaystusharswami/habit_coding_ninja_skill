const mongoose = require("mongoose");
const weeklyHabitSchema = new mongoose.Schema(
  {
    Habit: { type: mongoose.Schema.Types.ObjectId, ref: "Habit" },
    date: { type: Date, required: true },
    complete: { type: Boolean, required: true },
  },
  { timestamps: true }
);
const WeeklyDoneHabit = mongoose.model("WeeklyDoneHabit", weeklyHabitSchema);
module.exports = WeeklyDoneHabit;
