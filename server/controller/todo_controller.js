// import model
const {authModel} = require("../model/auth_model");

// index controller
const showTodo = async (req,res) => {
    // try and catch if there was error
    try{
        // find userdata
        const indexTodoData = await authModel.find({}, 'userdata');

        // maping array
        const userdata = indexTodoData.map(item => item.userdata).flat();

        res.status(200).json(userdata);
    }catch (err) {
        res.status(404).json({message: err});
    }
}

// find one todo controller
const indexTodo = async (req,res) => {
    // get params
    const {userId, userDataId} = req.params;

    // try catch
    try{
        // find user by id
        const findTodoData = await authModel.findById(userId);

        // find userdata by id
        const userData = findTodoData.userdata.find(item => item._id.equals(userDataId))
        
        res.status(200).json(userData);
    }catch(err) {
        res.status(404).json({message: err})
    }
};

// post todo controller
const postTodo = async (req,res) => {
    // get request body
    const { title } = req.body;

    // catch if there was an error
    try{
        // find user
        const username = await authModel.findOne({username: 'daffakhayru'});

        // push to subdocuments
        await username.userdata.push({
            title: title
        }) 

        // save userdata
        const postUserdata = await username.save();

        res.status(200).json(postUserdata);
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

        // update existing data
        res.status(200).json(putTodoData);
    }catch (err) {
        res.status(404).json({message: err});
    }
}

// delete todo controller
const delTodo = async (req,res) => {
    // get items 
    const {userId,userDataId} = req.params;

    try{
        // delete data from params
        const delTodoData = await authModel.findByIdAndUpdate(
            userId,
            {$pull: {userdata: { _id: userDataId}}},
            { new: true }
        );

        // response after completed delete data
        res.status(200).json({delTodoData});
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