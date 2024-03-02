const express = require('express');
require("dotenv").config();
const dbConnection = require("./databaseConfig/database");
const bookRouter = require('./routes/route');
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000
const extension = "/api/v1/"
const app = express();
// DATABASE
dbConnection();
// Middlewares
app.use(express.json());
// GET route
app.use('/api/v1/books', bookRouter);

// POST route
app.post('/submit-data', (req, res) => {
  const submittedData = req.body;
  console.log('Submitted data:', submittedData);
  res.send('Data received successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port http://${HOST}:${PORT}`);
});
