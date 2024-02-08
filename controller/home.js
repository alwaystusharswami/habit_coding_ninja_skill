const Habit = require("../models/habitSchema");
module.exports.home = async (req, res) => {
  try {
    const habit = await Habit.find().populate("User");
    return res.render("home", { habit });
  } catch (error) {
    console.error(error);
  }
};
