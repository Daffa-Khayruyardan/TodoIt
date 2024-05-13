// import some packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

// import db config
const { mongoose } = require("./config/db");
mongoose

// import route
const todoRoute = require("./route/todo_route");

// define app
const app = express();

// use midlleware plugins
app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}))

// import user routes
app.use("/todo", todoRoute);

// run server at port 3000
app.listen(process.env.PORT, () => {
    console.log(`server running at port 3000`)
})