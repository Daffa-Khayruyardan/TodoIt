// import packages
const express = require('express');
const router = express.Router();

// import middleware
const {authJWT} = require("../middleware/auth_middleware");

// import controller
const { getUser,updateUser } = require("../controller/user_controller");

// get user
router.get('/user/:id', getUser)

// post update usr info
router.put('/user/:id', updateUser)

module.exports = router;