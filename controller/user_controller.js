// import model
const {userModel} = require("../model/user_model");

// index controller
const indexUser = async (req,res) => {
    try{
        const indexTodoData = await userModel.find();

        res.json(indexTodoData);
    }catch (err) {
        console.log("Error occured: ", err);
    }
}

// post todo controller
const postUser = async (req,res) => {
    // get request body
    const { id,email,username,password } = req.query;

    // insert new value
    const newTodo = userModel({
        id: id,
        email: email,
        username: username,
        password: password
    });


    try{
        const postTodoData = await newTodo.save();

        res.json(postTodoData);
    }catch (err) {
        console.log("Err occured: ", err);
    }
}

// put todo controller
const putUser = async (req,res) => {
    // get params
    const {id} = req.params;

    // get query
    const {title} = req.body;

    try{
        const putTodoData = await userModel.findOneAndUpdate({id: id}, {title: title});

        res.json(putTodoData);
    }catch (err) {
        console.log("Error occured: ", err);
    }
}

// delete todo controller
const delUser = async (req,res) => {
    // get items 
    const {id} = req.params;

    try{
        // delete data from params
        const delTodoData = await userModel.deleteOne({id: id});

        res.json(delTodoData);
    }catch (err) {
        console.log("Error occured: ", err);
    }
}

module.exports = {
    indexUser,
    postUser,
    putUser,
    delUser
}