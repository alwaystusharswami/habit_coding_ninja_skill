const express = require("express");
const router = express.Router();
const homeController = require("../controller/home");
router.get("/", homeController.home);
router.use("/habit", require("./habit"));
router.use("/user", require("./user"));

module.exports = router;
