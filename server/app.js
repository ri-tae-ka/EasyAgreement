const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

//route imports
const user = require("./routes/userRoute");
const summary = require("./routes/summaryRoute");

app.use("/api/v1", user);
app.use("/api/v1", summary);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
