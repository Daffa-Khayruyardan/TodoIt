// imoprt database 
const {mongoose} = require("../config/db");

// make todo schema
const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}) 

// exports model
module.exports = mongoose.model("auth", authSchema);