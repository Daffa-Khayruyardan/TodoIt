// import packages
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// import model
const authModel = require("../model/auth_model");

// register controller
const signup = async (req,res) => { 
    // get body request

    const {email , username ,password} = req.body;
    
    try {
        // if email and password blank
        if(!email || !password) return res.status(400).json({msg: "please fill"});

        // find email in database
        const findEmail = await authModel.exists({email: email}); 

        // if email aleady exist 
        if(findEmail) return res.status(400).json({msg: "email exist"});

        // find username 
        const findUsername = await authModel.exists({username: username});

        // if username already exist 
        if(findUsername) return res.status(400).json({msg: "username exist"});

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

        res.status(200).json({msg: 'signup success'});
    }catch (err) {
        res.status(201).json({msg: `Error occured, ${err}`})
    }
};

// login controller 
const login = async (req,res) => {
    // get body request
    const {email, password} = req.body;

    // secret key
    const {SECRET_KEY} = process.env;

    try{
        // if email and password blank
        if(!email || !password) return res.status(400).json({msg: "please fill"});

        // find if user exist 
        const user = await authModel.findOne({email: email});

        // error if email is invalid
        if(!user) return res.status(400).json({msg: "invalid email"});

        // compare existing password
        const comparePassword = await bcrypt.compare(password,user.password);

        // error if password is invalid
        if(!comparePassword) return res.status(400).json({msg: "invalid password"});

        // sign jwt
        const jwtToken = await jwt.sign({user}, SECRET_KEY, { expiresIn: '1h' });

        // set to cookie
        res.cookie(user.username, jwtToken, { httpOnly: false });

        // respond
        res.status(200).json(user);

    }catch (err) {
         res.status(404).json({msg: "Not successfully"});
    }
}

module.exports = {
    signup,
    login 
}