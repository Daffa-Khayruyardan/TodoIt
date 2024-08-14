// import packages
require("dotenv").config();

// import model
const {authModel} = require("../model/auth_model");

// get user controller
const getUser = async (req,res) => {
    // get id params
    const {id} = req.params;

    // get current user
    const resultUser = await authModel.findById(id);

    res.status(200).json(resultUser);
};

const updateUser = async (req,res) => {
    // get id params
    const {id} = req.params;

    // get username from body
    const {username} = req.body;

    // update user
    const updateUser = await authModel.findByIdAndUpdate(id, {username: username}, {new: true});

    // send response to user
    res.status(200).json(updateUser);
};

module.exports = {
    getUser,
    updateUser,
}