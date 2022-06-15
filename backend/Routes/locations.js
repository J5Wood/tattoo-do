const express = require("express");
let app = express.Router();
const pool = require("../queries");

app.get("/", async (req, res) => {
  // Artificial timeout to check loading state
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000));
  pool.query("SELECT * FROM locations", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

module.exports = app;
