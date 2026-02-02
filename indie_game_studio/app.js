require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
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
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log('Failed to connect to MongoDB');
        console.error('Error details:', err.message);
        throw err;
    }
}
connectDB()

const User = require ("./model/user");
// Basic Route
app.get('/', (req, res) => {
    res.send('Welcome to the Indie Game Studio API');
});

app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        console.log("User created:", user);
        console.log("Request body:", req.body);
        res.json({
            msg: "User created successfully",
            data: user
        });
        res.status(201).json(user);
        res.send("processe completed");
    } catch (err) {
            console.error("Error creating user:", err);
        res.status(400).json({ error: err.message });
    }
});
// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});     

