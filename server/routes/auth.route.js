const express = require("express");
const passport = require("passport");

const {
  Login,
  Register,
  getProfile,
} = require("../controllers/auth.controller");

const router = express.Router();

// GET requests
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  getProfile
);

// post requests
router.post("/register", Register);
router.post("/login", Login);

module.exports = router;
