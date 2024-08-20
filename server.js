const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db'); // Import the database connection

const app = express();
const port = 3001; // You can change this port number

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const client = await pool.connect();
    const query = 'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, message];

    const result = await client.query(query, values);
    client.release();

    res.status(200).json({ message: 'Form submitted successfully', data: result.rows[0] });
  } catch (error) {
    console.error('Error saving contact form submission:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
