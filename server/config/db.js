// import packages 
const mongoose = require("mongoose");
require("dotenv").config();

// dotenv variable
const DB_URL = process.env.DB_URL;

// connect mongodb
mongoose.connect(DB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(`Error occured: ${err}`));

// export db config
module.exports = {
    mongoose
}