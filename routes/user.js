const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/signup", userController.signUp);
router.get("/signin", userController.signin);
router.post("/create", userController.createUser);
router.post("/createSession", userController.createSession);

module.exports = router;
