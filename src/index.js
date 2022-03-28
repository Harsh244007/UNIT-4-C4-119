const express = require('express');
const app = express();
app.use(express.json());

const todoController = require("./controller/todo.controller");
const {registerController, loginController} = require("./controller/auth.controller");


app.use("/todos", todoController)

app.use("/register", registerController);

app.use("/login", loginController);

module.exports = app;