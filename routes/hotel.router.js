const express = require("express");
const Hotel = require("../model/hotel.model");
const router = express.Router();

router.route("/").get(async (req, res) => {
  const hotelCategory = req.query.category;
  try {
    let hotels;
    if (hotelCategory) {
      hotels = await Hotel.find({ category: hotelCategory });
    } else {
      hotels = await Hotel.find({});
    }
    hotels
      ? res.json(hotels)
      : res.status(404).json({ message: "No data found" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
