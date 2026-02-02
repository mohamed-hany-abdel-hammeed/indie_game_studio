require ("dotenv").config();
const express = require ("express");
const app = express();
const PORT = process.env.PORT || 8000; 
const mongoose = require ("mongoose");
app.use(express.json())

 
// Exporting app for testing or further use 
// Listening on port from .env or default to 8000
// Basic route to respond with a message
// Loading environment variables from .env file
async function dbconnection(){
    try {
        await mongoose.connect(process.env.db_host);
        //,{useNewUrlParser: true, useUnifiedTopology: true}//)
    console.log("Database connected");
}catch (error) {
    console.log("Database connection error:", error.message);
}  
}
dbconnection();

//require models
const User = require ("./model/user");
// Middleware to parse JSON request bodies
app.post("/users", async (req, res)=>{
    try {
        const user =await User.create(req.body)
        console.log(req.body)
        res.json({
            msg: "created done",
            data: user
        });
        res.send("hi user")
    }catch (error) {
        // res.status(500).json({message: "Server error"});
        console.log("error: ", error.message)
    }
});


app.listen (PORT, () => {
    console.log (`Second server is running on port ${PORT}`);
});  


// app.get ("/", (req, res) => {
//     res.send ("Hello from the second server!");
// });
// module.exports = app;  
