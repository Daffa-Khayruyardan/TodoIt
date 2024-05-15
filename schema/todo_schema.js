// imoprt database 
const {mongoose} = require("../config/db");

// define schema
const Schema = mongoose.Schema;

// make todo schema
const todoSchema = new Schema({
    title: {
        type: String,
        required: false 
    }
})

// make model 
const todo = mongoose.model("todo", todoSchema);

// exports schema
module.exports = {
    todo 
}