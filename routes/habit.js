const express = require("express");
const router = express.Router();
const habitController = require("../controller/habit");
router
  .get("/weekview", habitController.weekView)
  .get("/destroy/:id", habitController.destroy)
  .post("/create", habitController.createHabit)
  .post("/complete/:id", habitController.complete);
module.exports = router;
