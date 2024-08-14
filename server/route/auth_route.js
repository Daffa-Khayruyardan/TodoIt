// import packages 
const express = require("express");

// import controller
const {signup,login,logout} = require("../controller/auth_controller");

// define router 
const router = express.Router();

// register route
router.post('/signup', signup);

// login route 
router.post('/login', login);

// logout route
router.post('/logout/:id', logout)

module.exports = router;