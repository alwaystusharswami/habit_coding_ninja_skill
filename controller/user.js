const User = require("../models/userSchema");
module.exports.profile = (req, res) => {
  return res.render("profile");
};
module.exports.signUp = (req, res) => {
  return res.render("signup");
};
module.exports.signOut = (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
  });
  return res.redirect("/user/signIn");
};
module.exports.signIn = (req, res) => {
  return res.render("signIn");
};
module.exports.createUser = async (req, res) => {
  if (req.body.password != req.body.confirmPassword) {
  req.flash('success','Password not match');

    return res.redirect("back");
  }
  const user = await User.create(req.body);
  req.flash('success','Sign Up Successful');

  return res.redirect("/user/signIn");
};
module.exports.createSession = (req, res) => {
  req.flash('success','Sign In Successful');
  
  return res.redirect("/");
};
