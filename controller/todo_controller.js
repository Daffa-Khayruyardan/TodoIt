// import model
const {todoModel} = require("../model/todo_model");

// index controller
const indexTodo = (req,res) => {
    todoModel.find()
        .then(data => res.json(data))
        .catch(err => console.log("Error occured: ", err));
}

// post todo controller
const postTodo = (req,res) => {
    // get request body
    const { title } = req.query;

    // insert new value
    const newTodo = todoModel({
        title: title 
    });

    newTodo.save()
        .then(res => console.log("Post succesfully created"))
        .catch(err => console.log("Error occured: ", err));

    res.send("Success");
}

// put todo controller
const putTodo = (req,res) => {
    // get params
    const {id} = req.params;

    res.send(success);
}

module.exports = {
    indexTodo,
    postTodo,
    putTodo
}