const app = require('./app');
const db = require('./config/db'); // You can set up your MongoDB connection here

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
