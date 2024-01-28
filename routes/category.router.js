const express = require("express");
const Category = require("../model/category.model");
const categoryHandler = require("../controllers/categoryController");
const router = express.Router();

router.route("/").get(categoryHandler);

module.exports = router;
