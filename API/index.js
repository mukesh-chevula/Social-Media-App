const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const mongoose = require('mongoose');

const app = express();
dotenv.config();



// Routes
// Define your routes here

// Start the server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
