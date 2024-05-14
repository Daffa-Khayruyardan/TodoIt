// import packages
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// import model
const authModel = require("../model/auth_model");

// register controller
const signup = async (req,res) => {
    // get body request
    const {username,password} = req.body;
    
    // catch error if there was error
    try{
        // make hash password
        const hashPassword = await bcrypt.hash(password,10);

        // create 
        const newAuth = authModel({
            username: username,
            password: hashPassword
        })

        // save new file
        const signupData = await newAuth.save();

        // give response status
        res.status(200).json(signupData);
    }catch (err) {
        console.log(err);
        res.status(404).json({message: err});
    }
};

// login controller 
const login = async (req,res) => {
    // get body request
    const {username,password} = req.body;

    // catch if there was error
    try {
        // find username
        const findUserdata = await authModel.findOne({
            username: username
        })

        // make sure user same 
        if(findUserdata) {
            // get password 
            const comparePassword = await bcrypt.compare(password, findUserdata.password)

            // make condition if password compare true
            if(comparePassword) {
                const userToken = jwt.sign({
                    username: username,
                }, process.env.SECRET_KEY);
            }else {
                res.status(400).json({error: "Password does not match"})
            }
        }else {
            // if user does not exist
            res.status(400).json({error: "User don't exist"})
        }

        
    }catch (err) {
        res.status(404).json({message: err});
    }
}

module.exports = {
    signup,
    login 
}