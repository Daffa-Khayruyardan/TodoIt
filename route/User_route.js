// import packages
const express = require('express');
const router = express.Router();

// import controller
const {indexUser, postUser, putUser, delUser} = require("../controller/user_controller");

// get todo index 
router.get('/', indexUser);

// post User
router.post('/create', postUser);

// put User
router.put('/:id', putUser);

// del User
router.delete('/delete/:id', delUser);


module.exports = router;