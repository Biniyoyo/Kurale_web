const mongoose = require("mongoose")

const itemSchema_ = new mongoose.Schema({
  id: { type: Number, required: false },
  name: { type: String, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: false },
  location: { type: String, required: false },
  category: { type: String, required: false },
});

const itemSchema = mongoose.model("item", itemSchema_)
module.exports = itemSchema