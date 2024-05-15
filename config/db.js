// import packages 
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// dotenv variable
const DB_URL = process.env.DB_URL;

// connect mongodb
mongoose.connect(DB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(`Error occured: ${err}`));

// create database schem
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    }
})

// export db config
module.exports = {
    mongoose
}