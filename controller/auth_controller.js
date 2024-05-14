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
    
    try{
        // create hashpassword
        const hashPassword =  await bcrypt.hash(password,10);

        const signupData = await new authModel({
            username,
            password: hashPassword
        });

        const signupPost = await signupData.save();

        console.log(hashPassword);

        res.status(200).json(signupPost);
    }catch (err) {
        res.status(404).json({msg: "Not successfully"});
    }
};

// login controller 
const login = async (req,res) => {
    // get body request
    const {username,password} = req.body;

    // secret key
    const {SECRET_KEY} = process.env;

    try{
        // find if user exist 
        const userExist = await authModel.findOne({username});

        // compare password
        const comparePassword = await bcrypt.compare(password,userExist.password);

        // if user exist and password match
        if(userExist && comparePassword) {
            // generate jwt
            const genToken = jwt.sign({username}, SECRET_KEY, {expiresIn: '1h'});

            // set cookies
            res.cookie('jwt_Key', genToken);

            res.status(200).json({msg: "Successfully"});
        }

    }catch (err) {
        res.status(404).json({msg: "Not successfully"});
    }

}

module.exports = {
    signup,
    login 
}