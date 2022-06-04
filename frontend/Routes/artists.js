const express = require("express");
let app = express.Router();
const pool = require("../queries");

app.get("/", (req, res) => {
  pool.query("SELECT * FROM artists", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  if (parseInt(id) < 1) {
    return res.status(400).send("Artist not found. Please try again.");
  }
  pool.query("SELECT * FROM artists WHERE id=$1", [id], (error, results) => {
    if (error || results.rows.length === 0) {
      return res.status(404).send("Artist not found. Please try again.");
    }
    res.status(200).send(results.rows);
  });
});

module.exports = app;
