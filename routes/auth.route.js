const express = require("express");
const { Login, Register, Profile } = require("../controllers/auth.controller");

const router = express.Router();

// GET requests
router.get("/profile", Profile);

// post requests
router.post("/register", Register);
router.post("/login", Login);

module.exports = router;
