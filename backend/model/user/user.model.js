const mongoose = require("mongoose");

const User = mongoose.Schema({
  email: String,
  password: String,
  name: String,
});

module.exports = mongoose.model("User", User);
