const express = require("express");
const path = require("path");
// ENV FILE ACCESS
const dotenv = require("dotenv").config();
// PORT
const port = 8000;
// EJS LAYOUT
const expressEjsLayout = require("express-ejs-layouts");
// SERVER
const app = express();

// VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));
app.use(expressEjsLayout);
app.listen(port, (err) => {
  if (err) {
    console.error(`error in server running `);
    return;
  }
  console.log(`server is running up on port ${port}`);
});
