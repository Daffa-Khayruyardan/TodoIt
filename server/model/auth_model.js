// imoprt database 
const {mongoose} = require("../config/db");

// make todo schema
const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false, 
        unique: true,
    },
    username: {
        type: String,
        required: false,
        unique: true,
    },
    password: {
        type: String,
        required: false
    }
}) 

// exports model
module.exports = mongoose.model("user", authSchema);