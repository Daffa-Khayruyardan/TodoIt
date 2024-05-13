// imoprt database 
const {mongoose} = require("../config/db");

// make todo schema
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false 
    }
}) 

// exports model
module.exports = mongoose.model("todo", todoSchema);