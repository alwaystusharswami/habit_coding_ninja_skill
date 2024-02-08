// ENV FILE ACCESS
require("dotenv").config();
const path = require("path");
// BODY PARSER
const bodyParser = require("body-parser");
// MONGOOSE CONNECTION
const mongoose = require("./config/mongoose");
const mongoStore = require("connect-mongo");

// PORT
const port = process.env.PORT | 8000;
// EJS LAYOUT
const expressEjsLayout = require("express-ejs-layouts");
// SASS MIDDLEWARE
const sassMiddleware = require("node-sass-middleware");
// COOKIE PARSER //
const cookieParser = require("cookie-parser");
// NODE-CRON //
const cron = require("./config/node-cron");
// SESSION //
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-stratergy");
//////
// SERVER //
const express = require("express");
// ROUTER
const router = express.Router();
const app = express();
// MIDDLEWARE
app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: true,
    outputStyle: "expanded",
    prefix: "/css",
  })
);
app.use(express.static(path.join(path.resolve(), "assets")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));
app.use(expressEjsLayout);

app.set("layout extractStyles", true);
app.use(
  session({
    name: "habit",
    secret: "habitApp",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 10,
    },
    store: mongoStore.create({
      mongoUrl: "mongodb://localhost/habitApp",
      autoRemove: "disabled",
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use("/", require("./routes"));
app.listen(port, (err) => {
  if (err) {
    console.error(`error in server running `);
    return;
  }
  console.log(`server is running up on port ${port}`);
});
