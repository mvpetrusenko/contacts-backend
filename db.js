// db.js

const { Pool } = require('pg');

// Update the following details with your PostgreSQL configuration
const pool = new Pool({
  user: 'postgres',       // Replace with your PostgreSQL user
  host: 'localhost',          // Replace with your PostgreSQL host
  database: 'node_js_project',     // Replace with your PostgreSQL database name
  password: 'root', // Replace with your PostgreSQL password
  port: 5432,                 // Replace with your PostgreSQL port if different
});

module.exports = pool;
