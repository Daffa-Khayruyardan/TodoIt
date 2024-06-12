// import packages 
const express = require("express");

// import controller
const {signup,login} = require("../controller/auth_controller");

// define router 
const router = express.Router();

// register route
router.post('/signup', signup);

// login route 
router.post('/login', login);

router.get('/coba', (req,res) => {
    res.cookie('jwt','12345');
    res.send("Hello");
});

module.exports = router;