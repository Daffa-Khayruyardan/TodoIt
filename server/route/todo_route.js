// import packages
const express = require('express');
const router = express.Router();

// import middleware
const {authJWT} = require("../middleware/auth_middleware");

// import controller
const {showTodo, indexTodo, postTodo, putTodo, delTodo} = require("../controller/todo_controller");

// get todo index 
router.get('/todo', showTodo);

// find one todo
router.get('/todo/:id', indexTodo)

// post todo
router.post('/todo', postTodo);

// put todo
router.put('/todo/:id', putTodo);

// del todo
router.delete('/todo/:id', delTodo);


module.exports = router;