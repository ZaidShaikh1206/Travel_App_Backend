const mongoose = require("mongoose");
const express = require("express");
const categories = require("../data/categories");
const Category = require("../model/category.model");

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    await Category.deleteMany();
    const categoryInDB = await Category.insertMany(categories.data);
    res.json(categoryInDB);
  } catch (error) {
    console.log(error);
    res.json({ message: "Could not add categories to DB" });
  }
});

module.exports = router;
