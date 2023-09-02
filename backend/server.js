const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("API is Running");
});
app.listen(
  process.env.PORT,
  console.log(`server started on port ${process.env.PORT}`)
);
