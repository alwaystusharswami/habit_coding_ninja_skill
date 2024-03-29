const Habit = require("../models/habitSchema");
const WeeklyDoneHabit = require("../models/weeklyHabit");
module.exports.home = async (req, res) => {
  try {
    if (req.user) {
      const habit = await Habit.find({ User: req.user.id });
      return res.render("home", { habit });
    }
    return res.render("home");
  } catch (error) {
    console.error(error);
  }
};
