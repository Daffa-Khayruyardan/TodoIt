// imoprt database 
const {mongoose} = require("../config/db");

// import schema
const {todoSchema} = require("./todo_model");

// make todo schema
const authSchema = new mongoose.Schema({
    email: { type: String, unique: true,},
    username: {type: String, unique: true, },
    password: { type: String, required: false },
    userdata: [todoSchema]
}) 

// create user model
const authModel = mongoose.model("user", authSchema);

// exports model
module.exports = {
    authModel
}