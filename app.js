const express = require('express');
const todoRoutes = require('./routes/todo_routes'); // Assuming you have a separate file for routes
const app = express();
const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use('/', todoRoutes);
module.exports = app;
