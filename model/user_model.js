// import db mongoose
const {mongoose} = require("../config/db");

// define schema 
const Schema = mongoose.Schema;

// create user schema 
const userSchema = new Schema({
    id: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false 
    },
    username: {
        type: String,
        required: false 
    },
    password: {
        type: String,
        required: false 
    }
})

// create model
const userModel = mongoose.model("user", userSchema);

// import model 
module.exports = {
    userModel
}