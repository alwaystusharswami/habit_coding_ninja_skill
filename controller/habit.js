const Habit = require("../models/habitSchema");
const WeeklyDoneHabit = require("../models/weeklyHabit");
module.exports.createHabit = async (req, res) => {
  const habit = await Habit.create({
    title: req.body.title,
    time: req.body.time,
    strike: 0,
    totalDays: 0,
    totalComplete: 0,
    day: 0,
    complete: false,
    User: req.user._id,
  });
  const week = await WeeklyDoneHabit.create({
    Habit: habit.id,
    date: new Date(),
    complete: false,
  });
  habit.daily.push(week);
  habit.save();
  return res.redirect("/");
};
module.exports.complete = async (req, res) => {
  const isTrueSet = String(req.body.complete).toLowerCase() === "false";
  if (isTrueSet) {
    const habit = await Habit.findByIdAndUpdate(req.params.id, {
      $set: { complete: isTrueSet },
      $inc: { strike: 1, totalDays: 1, totalComplete: 1, day: 1 },
    });
    const weekData = await WeeklyDoneHabit.find({ Habit: habit.id });
    for (i of weekData) {
      const today = new Date();
      if (
        i.date.getDate() == today.getDate() &&
        i.date.getMonth() == today.getMonth() &&
        !i.complete
      ) {
        i.complete = true;
        i.save();
      }
    }
  } else {
    const habit = await Habit.findByIdAndUpdate(req.params.id, {
      $set: { complete: isTrueSet },
      $inc: { strike: -1, totalDays: -1, totalComplete: -1, day: -1 },
    });
    const weekData = await WeeklyDoneHabit.find({ Habit: habit.id });
    for (i of weekData) {
      const today = new Date();
      if (
        i.date.getDate() == today.getDate() &&
        i.date.getMonth() == today.getMonth() &&
        i.complete
      ) {
        i.complete = false;
        i.save();
      }
    }
  }

  return res.redirect("/");
};
module.exports.weekView = async (req, res) => {
  if (req.user) {
    const habit = await Habit.find({ User: req.user.id })
      .populate({ path: "daily" })
      .exec();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return res.render("weekview", { habit, date: new Date(), week: days });
  }
  return res.render("weekview");
};
