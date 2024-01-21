const express = require("express");
const router = express.Router();

const Hotel = require("../model/hotel.model");

router.route("/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await Hotel.findById(id);
    hotel
      ? res.send(hotel)
      : res.status(404).send({ message: "No hotel found" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
