// import model
const {todoModel} = require("../model/todo_model");

// index controller
const indexTodo = async (req,res) => {
    try{
        const indexTodoData = await todoModel.find();

        res.json(indexTodoData);
    }catch (err) {
        console.log("Error occured: ", err);
    }
}

// post todo controller
const postTodo = async (req,res) => {
    // get request body
    const { id,title } = req.query;

    // insert new value
    const newTodo = todoModel({
        id: id,
        title: title 
    });


    try{
        const postTodoData = await newTodo.save();

        res.json(postTodoData);
    }catch (err) {
        console.log("Err occured: ", err);
    }
}

// put todo controller
const putTodo = async (req,res) => {
    // get params
    const {id} = req.params;

    try{
        const putTodoData = await todoModel.findOneAndUpdate({id: id});

        res.json(putTodoData);
    }catch (err) {
        console.log("Error occured: ", err);
    }
}

// delete todo controller
const delTodo = async (req,res) => {
    // get items 
    const {id} = req.params;

    try{
        // delete data from params
        const delTodoData = await todoModel.deleteOne({id: id});

        res.json(delTodoData);
    }catch (err) {
        console.log("Error occured: ", err);
    }
}

module.exports = {
    indexTodo,
    postTodo,
    putTodo,
    delTodo
}