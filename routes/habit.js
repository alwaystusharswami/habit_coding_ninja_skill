const express = require("express");
const router = express.Router();
const habitController = require("../controller/habit");
router
  .post("/create", habitController.createHabit)
  .post("/complete/:id", habitController.complete);
module.exports = router;
