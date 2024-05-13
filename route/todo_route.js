// import packages
const express = require('express');
const router = express.Router();

// import controller
const {indexTodo, findTodo, postTodo, putTodo, delTodo} = require("../controller/todo_controller");

// get todo index 
router.get('/', indexTodo);

// find one todo
router.get('/:id', findTodo)

// post todo
router.post('/create', postTodo);

// put todo
router.put('/edit/:id', putTodo);

// del todo
router.delete('/delete/:id', delTodo);


module.exports = router;