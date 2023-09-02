const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});
app.listen(
  process.env.PORT,
  console.log(`server started on port ${process.env.PORT}`)
);
