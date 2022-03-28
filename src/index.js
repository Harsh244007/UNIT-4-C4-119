const express = require('express');
const app = express();
app.use(express.json());

const todoController = require("./controller/todo.controller");
const {register, login} = require("./controller/auth.controller");


app.use("/todos", todoController)

app.use("/register", register);

app.use("/login", login);

module.exports = app;