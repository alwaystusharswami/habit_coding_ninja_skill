const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const passport = require("passport");

router.get("/signup", userController.signUp);
router.get("/signin", userController.signIn);
router.get("/profile", userController.profile);
router.post("/create", userController.createUser);
router.post(
  "/createSession",
  passport.authenticate("local", { failureRedirect: "/user/signin" }),
  userController.createSession
);

module.exports = router;
