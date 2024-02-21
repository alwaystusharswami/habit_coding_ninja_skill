const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/userSchema");
passport.use(
  new LocalStrategy(
    { usernameField: "email", passReqToCallback: true },
    async function (email, password, done) {
      try {
        const user = await User.findOne({ email: email });

        if (!user || user.password != password) {
          req.flash("error", "Please give valid userId & password");
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        console.log(error);
      }
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(async function (id, done) {
  const user = await User.findById(id);
  return done(null, user);
});

passport.checkAuthentication = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/user/signin");
};
passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};
