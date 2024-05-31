// import packages
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// import model
const authModel = require("../model/auth_model");

// register controller
const signup = async (req,res) => {
    // get body request
    const {email, username,password} = req.query;
    
    try {
        // find email in database
        const findEmail = await authModel.exists({email: email}); 

        // if email not found
        if(findEmail) return res.status(400).json({msg: "email exist"});

        // find username in database
        const findUsername = await authModel.exists({username: username}); 
        
        // if email not found
        if(findUsername) return res.status(200).json({msg: "username exist"});

        // encrypt password
        const hashPassword = await bcrypt.hash(password, 10);

        // create new user
        const newUser = authModel({
            email: email,
            username: username,
            password: hashPassword
        })

        // save new insert data
        const newData = await newUser.save();

        res.status(200).json({newData});
    }catch (err) {
        res.status(201).json({msg: `Error occured, ${err}`})
    }
};

// login controller 
const login = async (req,res) => {
    // get body request
    const {email,password} = req.body;

    // secret key
    const {SECRET_KEY} = process.env;

    try{
        // find if user exist 
        const userExist = await authModel.findOne({email});

        // compare existing password
        const comparePassword = await bcrypt.compare(password,userExist.password);

        // if user exist and password match
        if(userExist && comparePassword) {
            // generate jwt
            const genToken = jwt.sign({userExist}, SECRET_KEY, {expiresIn: '1h'});

            // set cookies
            res.cookie('jwt_Key', genToken);

            // send return value success
            res.status(200).json({msg: "Successfully"});
        }else {
            // return value incorrect user and password 
            res.status(404).json({msg: "Incorrect user and password"});
        }

    }catch (err) {
        // send error messages
        res.status(404).json({msg: `Error occured: ${err}`});
    }

}

module.exports = {
    signup,
    login 
}