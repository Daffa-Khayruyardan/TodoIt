// import packages
const express = require('express');
const router = express.Router();

// import controller
const {indexTodo, postTodo, putTodo} = require("../controller/todo_controller");

// get todo index 
router.get('/', indexTodo);

// post todo
router.post('/create', postTodo)

// put todo
router.put('/:id', )


module.exports = router;