const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
var _ = require("lodash");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// mongoose.connect("mongodb://0.0.0.0:27017/wikiDB");

app.post("/", function (req, res) {
  res.send("I am here")
})

app.listen(PORT, () => {
  console.log(`Server started. Listening on ${PORT}`);
});

// npm i express body-parser ejs mongoose lodash