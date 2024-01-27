const express = require("express");
// ROUTER
const router = express.Router();
const path = require("path");
// BODY PARSER
const bodyParser = require("body-parser");
// MONGOOSE CONNECTION
const mongoose = require("./config/mongoose");
// ENV FILE ACCESS
const dotenv = require("dotenv").config();
// PORT
const port = 8000;
// EJS LAYOUT
const expressEjsLayout = require("express-ejs-layouts");
// SASS MIDDLEWARE
const sassMiddleware = require("node-sass-middleware");
// SERVER
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
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

// VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));
app.use(expressEjsLayout);

app.set("layout extractStyles", true);
app.use("/", require("./routes"));
app.listen(port, (err) => {
  if (err) {
    console.error(`error in server running `);
    return;
  }
  console.log(`server is running up on port ${port}`);
});
