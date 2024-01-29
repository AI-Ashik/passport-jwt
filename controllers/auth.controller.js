// all get request for the routes
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/auth.model");

// post routes
const Register = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if the user already exists or not
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      // If user exists, return a 400 status with a message
      return res.status(400).json({ message: "User already exists" });
    }
    // If user doesn't exist, hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Return a success message with the user details
    return res.status(201).json({
      message: "User created successfully",
      user: {
        // eslint-disable-next-line no-underscore-dangle
        id: newUser._id,
        username: newUser.username,
      },
    });
  } catch (error) {
    // Handle any unexpected errors
    return res.status(500).json({ message: "Something went wrong" });
  }
};
const Login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid User" });
    }

    // Compare passwords by bcrypt
    const isValidated = await bcrypt.compare(password, user.password);

    if (isValidated) {
      const token = jwt.sign(
        {
          username: user.username,
          // eslint-disable-next-line no-underscore-dangle
          userId: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "2d",
        }
      );
      return res.status(200).json({
        success: true,
        token: `Bearer ${token}`,
        message: "Login successful",
      });
    }
    // Passwords do not match, user is not valid
    return res.status(401).json({
      success: false,
      message: "Invalid User",
    });
  } catch (error) {
    // Handle any unexpected errors
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { Register, Login };
