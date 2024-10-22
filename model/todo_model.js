const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String }
});

module.exports = mongoose.model('Todo', todoSchema);
