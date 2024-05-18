// import packages
const express = require('express');
const router = express.Router();

// import controller
const {indexTodo, findTodo, postTodo, putTodo, delTodo} = require("../controller/todo_controller");

// get todo index 
router.get('/todo', indexTodo);

// find one todo
router.get('/todo/:id', findTodo)

// post todo
router.post('/todo', postTodo);

// put todo
router.put('/todo/:id', putTodo);

// del todo
router.delete('/todo/:id', delTodo);


module.exports = router;