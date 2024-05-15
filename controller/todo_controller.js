// import model
const {todoModel} = require("../model/todo_model");

// index controller
const indexTodo = (req,res) => {
    todoModel
    res.send("Hello World")
}

module.exports = {
    indexTodo
}