const express = require("express");
const app = express();
const logger = require("morgan");

app.use(logger("dev"));
app.use(express.json());

const indexRouter = require("./routers/index");
app.use("/", indexRouter);

const userRouter = require("./routers/users");
app.use("/users", userRouter);

const mathRouter = require("./routers/math");
app.use("/math", mathRouter);

const listRouter = require("./routers/list");
app.use("/list", listRouter);

const logRouter = require("./routers/log");
app.use("/log", logRouter);


module.exports = app;


