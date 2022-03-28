const express = require('express');
const app = express();
app.use(express.json());

const todoController = require("./controller/todo.controller");
const todoidController = require("./controller/todoid.controller");
const loginController = require("./controller/login.controller");
const registerController = require("./controller/register.controller");


app.use("/todos", todoController)

app.use("/todos:id", todoidController)

app.use("/register", registerController);

app.use("/login", loginController);

module.exports = app;