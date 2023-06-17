const mongoose = require("mongoose");

const User = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  confirmationCode: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("User", User);
