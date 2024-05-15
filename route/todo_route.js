const express = require('express');
const router = express.Router();

// import controller
const {indexTodo} = require("../controller/todo_controller");

router.get('/user', indexTodo);

module.exports = router;