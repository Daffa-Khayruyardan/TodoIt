const {todo} = require("../schema/todo_schema");

const newTodo = new todo({
    title: "First data",
})

newTodo.save()
    .then(todo => console.log("Created"))
    .catch(err => console.log(err));

// export models
module.exports = {
    newTodo
}