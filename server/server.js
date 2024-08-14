// import some packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// get env variable 
require("dotenv").config();

// import route
const todoRoute = require("./route/todo_route");
const authRoute = require("./route/auth_route");
const userRoute = require("./route/user_route");

// define app
const app = express();

// use midlleware plugins
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200
}));
app.use(cookieParser());

// import user routes
app.use("/api", todoRoute);
app.use('/api', authRoute);
app.use('/api', userRoute);

app.get('/', (req,res) => {
    const headerAuth = req.headers["authorization"];

    res.send('jelek');
});

// run server at port 3000
app.listen(process.env.PORT, () => {
    console.log(`server running at port 3000`)
})