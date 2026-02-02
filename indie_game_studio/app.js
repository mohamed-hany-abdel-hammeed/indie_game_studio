require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;
// const gameRoutes = require('./routes/gameRoutes');

// Middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/api/games', gameRoutes);

// Database Connection
// mongoose.connect(process.env.DB_HOST, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
// })
const dbHost = process.env.DB_HOST || 8000;
async function connectDB() {
    try {
        await mongoose.connect(dbHost);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
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

