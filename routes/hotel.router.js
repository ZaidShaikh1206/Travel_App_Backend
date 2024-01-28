const express = require("express");
const Hotel = require("../model/hotel.model");
const getAllHotelHandler = require("../controllers/hotelController");
const router = express.Router();

router.route("/").get(getAllHotelHandler);

module.exports = router;
