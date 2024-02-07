const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/userSchema");
passport.use(
  new LocalStrategy({ usernameField:'email' }, async function (
    email,
    password,
    done
  ) {
    const user = await User.findOne({ email: email });

    if (!user || user.password != password) {
    console.log(user);
  
      return done(null, false);
    }
    return done(null, user);
  })
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  const user = User.findById(id);
  return done(null, user);
});

