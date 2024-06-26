// import packages
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authJWT = (req,res,next) => {
    // get header payload
    const {authorization} = req.headers;

    // if header blank
    if(!authorization) return res.status(400).json({msg: "need token"});

    // get token
    const userToken = authorization.split(' ')[1];

    // get secret key
    const {SECRET_KEY} = process.env;

    // verify jwt 
    const verifyJWT = jwt.verify(userToken,SECRET_KEY);

    // next to controller
    next();
}

module.exports = {
    authJWT
}