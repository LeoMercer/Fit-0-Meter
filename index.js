require("./model/db");
require("./model/reguser.model");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(5000, () => {
  console.log("App listening at http://localhost:5000");
});

// Define routes for your EJS pages
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/activities", function (req, res) {
  res.render("activities.ejs");
});

app.get("/diet", function (req, res) {
  res.render("diet.ejs");
});

app.get("/tracker", function (req, res) {
  res.render("tracker.ejs");
});

app.get("/watertracker", function (req, res) {
  res.render("watertracker.ejs");
});

app.get("/weight", function (req, res) {
  res.render("weight.ejs");
});

app.get("/calorie", function (req, res) {
  res.render("calorie.ejs");
});

app.get("/login", function (req, res) {
  res.render("login.ejs");
});

app.get("/registration", function (req, res) {
  res.render("registration.ejs");
});
