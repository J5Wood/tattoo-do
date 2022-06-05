const { Pool } = require("pg");

const pool = new Pool({
  user: "jeremywood",
  host: "localhost",
  database: "tattooDo",
  password: "",
  port: 5432,
});

module.exports = pool;
