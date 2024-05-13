const TodoRoute = async (fastify,options) => {
    fastify.get("/", async (req,rep) => {
        return { hello: "World" };
    });
} 

module.exports = TodoRoute;