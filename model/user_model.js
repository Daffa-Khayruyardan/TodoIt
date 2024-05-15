// import db mongoose
const {mongoose} = require("../config/db");

// define schema 
const Schema = mongoose.Schema;

// create user schema 
const userSchema = new Schema({
    email: {
        type: String,
        required: false 
    },
    username: {
        type: String,
        required: false 
    },
})

// create model
const user = mongoose.model("user", userSchema);

// import model 
module.exports = {
    user
}