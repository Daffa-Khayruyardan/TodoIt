const express = require("express");

// import route
const todoRoute = require("./route/todo_route");

const app = express();

app.use("/todo", todoRoute);

app.listen(3000, () => {
    console.log(`server running at port 3000`)
})