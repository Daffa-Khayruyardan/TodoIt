// import packages
const express = require('express');
const router = express.Router();

// import middleware
const {authJWT} = require("../middleware/auth_middleware");

// import controller
const {showTodo, indexTodo, postTodo, putTodo, delTodo} = require("../controller/todo_controller");

// get todo index 
router.get('/todo/:userId',showTodo);

// find one todo
router.get('/todo/:userId/:userDataId',indexTodo)

// post todo
router.post('/todo/:user',postTodo);

// put todo
router.put('/todo/:userId/:userDataId',putTodo);

// del todo
router.delete('/todo/:userId/:userDataId',delTodo);


module.exports = router;