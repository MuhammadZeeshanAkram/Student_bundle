const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todo_routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', todoRoutes);

module.exports = app;
