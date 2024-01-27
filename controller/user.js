const User = require("../models/userSchema");
module.exports.signUp = (req, res) => {
  return res.render("signup");
};
module.exports.signin = (req, res) => {
  return res.render("signin");
};
module.exports.createUser = async (req, res) => {
  if (req.body.password != req.body.confirmPassword) {
    return res.redirect("back");
  }
  const user = await User.create(req.body);
  return res.redirect("/");
};
module.exports.createSession = (req, res) => {
  return res.redirect("/");
};
