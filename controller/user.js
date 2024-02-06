const User = require("../models/userSchema");
module.exports.profile = (req, res) => {
  return res.render("profile");
};
module.exports.signUp = (req, res) => {
  return res.render("signup");
};
module.exports.signIn = (req, res) => {
  return res.render("signin");
};
module.exports.createUser = async (req, res) => {
  if (req.body.password != req.body.confirmPassword) {
    return res.redirect("back");
  }
  const user = await User.create(req.body);
  return res.redirect("/user/signin");
};
module.exports.createSession = (req, res) => {
  console.log(req.isAuthenticated());
  return res.redirect("/");
};
