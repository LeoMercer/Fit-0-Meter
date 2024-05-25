const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  mothername: String,
  fathername: String,
  address: String,
  gender: String,
  dob: Date,
  pincode: Number,
  course: String,
  email: String,
});
const user = new mongoose.model("user", userSchema);
module.exports = user;
