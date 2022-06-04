const express = require("express");
let app = express.Router();

app.get("/", (req, res) => {
  res.send("All Cities");
});

module.exports = app;
