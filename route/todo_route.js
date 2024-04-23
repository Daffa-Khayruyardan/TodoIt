// require some app
const app = require('../app/app.js');

// get controller 
const todoController = require('../controller/todo_controller.js');

// getTodo route
const getTodoRoute = app.fastify.get('/', todoController);