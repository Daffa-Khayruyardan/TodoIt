// imoprt database 
const {mongoose} = require("../config/db");

// make todo schema
const authSchema = new mongoose.Schema({
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
module.exports = mongoose.model("auth", authSchema);