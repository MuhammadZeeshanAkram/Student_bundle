const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connection = mongoose.createConnection(process.env.MONGO_URL, {
}).on('connected', () => {
    console.log('connected to database');
}).on('error', () => {
    console.log('connection failed');
});

module.exports = connection;
