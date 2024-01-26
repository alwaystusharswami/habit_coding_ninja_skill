const express = require("express");
// ENV FILE ACCESS
const dotenv = require("dotenv").config();
// PORT
const port = 8000;
// SERVER
const app = express();
app.listen(port, (err) => {
  if (err) {
    console.error(`error in server running `);
    return;
  }
  console.log(`server is running up on port ${port}`);
});
