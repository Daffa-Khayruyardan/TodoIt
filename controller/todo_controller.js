// import model
const todoModel = require("../model/todo_model");

// index controller
const showTodo = async (req,res) => {
    // try and catch if there was error
    try{
        const indexTodoData = await todoModel.find();

        res.status(200).json(indexTodoData);
    }catch (err) {
        res.status(404).json({message: err});
    }
}

// find one todo controller
const indexTodo = async (req,res) => {
    // get params
    const {id} = req.params;

    // try catch
    try{
        const findTodoData = await todoModel.findById(id);
        
        res.status(200).json(findTodoData);
    }catch(err) {
        res.status(404).json({message: err})
    }
};

// post todo controller
const postTodo = async (req,res) => {
    // get request body
    const { title } = req.query;

    // insert new value
    const newTodo = todoModel({
        title: title 
    });

    // catch if there was an error
    try{
        const postTodoData = await newTodo.save();

        res.status(200).json(postTodoData);
    }catch (err) {
        res.status(404).json({message: err});
    }
}

// put todo controller
const putTodo = async (req,res) => {
    // get params
    const {id} = req.params;

    // get query
    const {title} = req.body;

    try{
        // response after update data
        const putTodoData = await todoModel.findByIdAndUpdate(id, {title}, {new:true});

        // 
        res.status(200).json(putTodoData);
    }catch (err) {
        res.status(404).json({message: err});
    }
}

// delete todo controller
const delTodo = async (req,res) => {
    // get items 
    const {id} = req.params;

    try{
        // delete data from params
        const delTodoData = await todoModel.findByIdAndDelete(id);

        // response after completed delete data
        res.status(200).json(delTodoData);
    }catch (err) {
        // response failed delete data 
        res.status(404).json({message: err});
    }
}

module.exports = {
    showTodo,
    indexTodo,
    postTodo,
    putTodo,
    delTodo
}