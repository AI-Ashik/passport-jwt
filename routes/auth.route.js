const express = require("express");
const passport = require("passport");

const { Login, Register } = require("../controllers/auth.controller");

const router = express.Router();

// GET requests
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({
      success: true,
      user: {
        // eslint-disable-next-line no-underscore-dangle
        id: req.user._id,
        username: req.user.username,
      },
    });
  }
);

// post requests
router.post("/register", Register);
router.post("/login", Login);

module.exports = router;
