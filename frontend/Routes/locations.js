const express = require("express");
let app = express.Router();
const pool = require("../queries");

app.get("/", (req, res) => {
  pool.query("SELECT * FROM locations", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

module.exports = app;
