const Habit = require("../models/habitSchema");
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
  return res.redirect("/");
};
module.exports.complete = async (req, res) => {
  const isTrueSet = String(req.body.complete).toLowerCase() === "false";
  if (isTrueSet) {
    const habit = await Habit.findByIdAndUpdate(req.params.id, {
      $set: { complete: isTrueSet},
      $inc: { strike: 1, totalDays: 1, totalComplete: 1, day: 1 },
    });
    console.log(habit)
  } else {
    const habit = await Habit.findByIdAndUpdate(req.params.id, {
      $set: { complete: isTrueSet },
      $inc: { strike: -1, totalDays: -1, totalComplete: -1, day: -1 },
    });
  }

  return res.redirect("/");
};
function getTodayDated() {
  const today = new Date();
  let date = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  return date + " " + month + " " + year;
}