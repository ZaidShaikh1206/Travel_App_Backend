const mongoose = require("mongoose");

const catergorySchema = new mongoose.Schema({
  category: { type: String, required: true },
});

const Category = mongoose.model("Category", catergorySchema);

module.exports = Category;
