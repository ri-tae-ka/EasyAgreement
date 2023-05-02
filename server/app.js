const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");

const app = express();

const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

app.post("/extract-text", (req, res) => {
  if (!req.files && !req.files.pdfFile) {
    res.status(400);
    res.end();
  }

  pdfParse(req.files.pdfFile).then((result) => {
    res.send(result.text);
  });
});

//route imports
const user = require("./routes/userRoute");
const summary = require("./routes/summaryRoute");

app.use("/api/v1", user);
app.use("/api/v1", summary);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
