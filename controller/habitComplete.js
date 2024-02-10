const mongoose = require("mongoose");
const completeHabit = new mongoose.Schema(
  {
    done: { type: Boolean, required: true },
    date: { type: Date, required: true },
    habit: { type: mongoose.Schema.Types.ObjectId, ref: "Habit" },
  },
  { timestamps: true }
);
const CompleteHabit = mongoose.model("CompleteHabit", completeHabit);
module.exports=CompleteHabit;
