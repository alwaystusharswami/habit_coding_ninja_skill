const cron = require("node-cron");
const WeeklyDoneHabit = require("../models/weeklyHabit");
const Habit = require("../models/habitSchema");
cron.schedule("0 0 * * *", async () => {
  // This function will be called every day at midnight
  console.log("Task scheduled for midnight.");
  // Call your function here
  const habit = await Habit.find();
  for (let i of habit) {
    await WeeklyDoneHabit.create({
      Habit:i.id,
      date:new Date(),
      complete:false
    });
    if (i.complete) {
      updateTrue(i.id);
    } else {
      updateFalse(i.id);
    }
  }
});
async function updateTrue(id) {
  await Habit.findByIdAndUpdate(id, {
    $set: { complete: false },
    $inc: { totalDays: 1 },
  });
}
async function updateFalse(id) {
  await Habit.findByIdAndUpdate(id, {
    $set: { complete: false, day: 0 },
    $inc: { totalDays: 1 },
  });
}
