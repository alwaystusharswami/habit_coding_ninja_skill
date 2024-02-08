const cron = require("node-cron");
const Habit = require("../models/habitSchema");
cron.schedule("0 0 * * *", () => {
  // This function will be called every day at midnight
  console.log("Task scheduled for midnight.");
  // Call your function here
});
async function dayComplete() {
    await Habit.updateMany({$set:{complete:false,strike:0,totalDays:0,totalComplete:0,day:0}})
}
