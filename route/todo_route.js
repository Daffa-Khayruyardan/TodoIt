// import packages
const express = require('express');
const router = express.Router();

// import controller
const {indexTodo, postTodo, putTodo, delTodo} = require("../controller/todo_controller");

// get todo index 
router.get('/', indexTodo);

// post todo
router.post('/create', postTodo);

// put todo
router.put('/:id', putTodo);

// del todo
router.delete('/delete/:id', delTodo);


module.exports = router;