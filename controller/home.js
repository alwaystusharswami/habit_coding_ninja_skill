const Habit = require("../models/habitSchema");
const WeeklyDoneHabit = require("../models/weeklyHabit");
module.exports.home = async (req, res) => {
  try {
    if (req.user) {
      const habit = await Habit.find({ User: req.user.id });
      for(i of habit){
      let week = await WeeklyDoneHabit.find({Habit:i.id});
      console.log(week[0].date.getDate());
      }
      return res.render("home", { habit });
    }
    return res.render("home");
  } catch (error) {
    console.error(error);
  }
};
