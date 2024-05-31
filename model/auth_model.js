// imoprt database 
const {mongoose} = require("../config/db");

// make todo schema
const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false, 
    },
    username: {
        type: String,
        required: false, 
    },
    password: {
        type: String,
        required: false
    }
}) 

// exports model
module.exports = mongoose.model("user", authSchema);