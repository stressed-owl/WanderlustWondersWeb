const dotenv = require("dotenv");
const Pool = require("pg").Pool;

// configraration with env.
dotenv.config();

/* The code is creating a new instance of the `Pool` class from the `pg` module. The `Pool` class is
used to manage a pool of client connections to a PostgreSQL database. */
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

module.exports = pool;
