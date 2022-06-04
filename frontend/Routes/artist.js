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
  pool.query("SELECT * FROM artists WHERE id=$1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

module.exports = app;
