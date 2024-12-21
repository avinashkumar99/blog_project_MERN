const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(`${process.env.MONGOURI}blogsdb`)
  .then(() => console.log("Connectted to database."))
  .catch((e) => console.log("error while conneting to db: ", e));
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("server is listening on port 8080");
});
