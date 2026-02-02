 
const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true
    },
    employment_type:{
        type:String,
        required:true
    },
    hourly_rate:{
        type:Number,
        required:true
    }
},{timestamp:true})

const User = mongoose.model("User",user)
module.exports= User;