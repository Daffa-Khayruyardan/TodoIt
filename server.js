const fastify = require("fastify")();

const TodoRoute = require("./route/todo_route");

fastify.register(TodoRoute);

fastify.listen({ port: 3000 }, () => {
    console.log("Server running")
})