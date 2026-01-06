const express = require("express");
const app = express();
const emailroutes = require("./routes/email.routes");
app.use(express.json());
app.use("/api", emailroutes);
module.exports = app;
