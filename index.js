const express = require("express");
require("dotenv").config();
require("./config/db");
const passport = require("passport");
const cors = require("cors");
const authRouter = require("./routes/auth.route");
require("./config/passport");

const { PORT } = process.env;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", authRouter);
app.use(passport.initialize());

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found",
  });
  next();
});

app.use((error, req, res, next) => {
  res.status(500).json({
    message: "Default Internal Server Error",
  });
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
