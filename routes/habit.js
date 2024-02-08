const express = require("express");
const router = express.Router();
const habitController = require("../controller/habit");
router.post("/create", habitController.createHabit);
module.exports=router;