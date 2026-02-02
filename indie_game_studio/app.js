require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_HOST);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}
connectDB()


// Basic Route
app.get('/', (req, res) => {
    res.send('Welcome to the Indie Game Studio API');
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});     

