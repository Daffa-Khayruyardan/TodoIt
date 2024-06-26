// import packages
const express = require('express');
const router = express.Router();

// import middleware
const {authJWT} = require("../middleware/auth_middleware");

// import controller
const {showTodo, indexTodo, postTodo, putTodo, delTodo} = require("../controller/todo_controller");

// get todo index 
router.get('/todo',authJWT,showTodo);

// find one todo
router.get('/todo/:id',authJWT,indexTodo)

// post todo
router.post('/todo',authJWT,postTodo);

// put todo
router.put('/todo/:id',authJWT,putTodo);

// del todo
router.delete('/todo/:id',authJWT,delTodo);


module.exports = router;