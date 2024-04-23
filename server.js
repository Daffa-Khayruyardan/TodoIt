// require some app
const {fastify} = require('./app/app.js');

// route todo
const {getTodoRoute} = require('./route/todo_route.js')
  
fastify.listen({port: 3000});