const express = require("express");
require("dotenv").config();
require("./config/db");
require("./passport");
const cors = require("cors");
const authRouter = require("./routes/auth.route");

const { PORT } = process.env;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", authRouter);

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
    message: "Internal Server Error",
  });
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
