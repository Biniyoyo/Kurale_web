const mongoose = require("mongoose");

const userSchema_ = new mongoose.Schema({
  name: { type: String, required: false },
  address: { type: String, required: false },
  email: { type: String, required: false, unique: true },
  password: { type: String, required: false },
});

const userSchema = mongoose.model("User", userSchema_);
module.exports = userSchema;
 