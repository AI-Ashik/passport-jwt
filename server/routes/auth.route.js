const express = require("express");
const passport = require("passport");

const { Login, Register } = require("../controllers/auth.controller");

const router = express.Router();

// GET requests
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { _id: id, username } = req.user;
    res.json({
      success: true,
      user: {
        id,
        username,
      },
    });
  }
);

// post requests
router.post("/register", Register);
router.post("/login", Login);

module.exports = router;
