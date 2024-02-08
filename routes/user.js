const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const passport = require("passport");

router.get("/signUp", userController.signUp);
router.get("/signIn", userController.signIn);
router.get("/signOut", userController.signOut);
router.get("/profile", userController.profile);
router.post("/create", userController.createUser);
router.post(
  "/createSession",
  passport.authenticate("local", { failureRedirect: "/user/signIn" }),
  userController.createSession
);

module.exports = router;
