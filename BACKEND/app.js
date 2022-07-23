const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/error");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//route imports
const routes = require("./routes/index.js");
app.use("/", routes);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
