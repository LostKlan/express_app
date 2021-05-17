/**
 * Create an express server
 * Connect to mongodb
 * Initialize express middleware
 * cre
 */
const express = require('express');
const connectDB = require('./db/db');
require('dotenv').config();
const { PORT } = process.env;

// Connecting to db
connectDB();

// nitialize express
const app = express();

// initialize middleware
app.use(express.json({ extended: false}));

// Create a basic express route
app.get('/', (req, res) => res.json({ message: "Welcome to my express app"}))

// PORT
const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`App running on ${port}`));