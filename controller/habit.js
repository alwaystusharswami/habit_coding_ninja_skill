const Habit = require("../models/habitSchema");
module.exports.createHabit = async (req, res) => {
  const habit = await Habit.create({
    title: req.body.title,
    time:req.body.time,
    repeat: req.body.repeat,
    strike: 0,
    totalDays: 0,
    totalComplete: 0,
    day: 0,
    User:req.user._id
  });
  return res.redirect("/");
};
