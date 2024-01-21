const express = require("express");
const Wishlist = require("../model/wishlist.model");
const verifyUser = require("../middleware/verifyuser");
const router = express.Router();

router.route("/").post(verifyUser, async (req, res) => {
  const newWishlist = new Wishlist(req.body);
  try {
    const savedWishlist = await newWishlist.save();
    res.status(201).json(savedWishlist);
  } catch (error) {
    res.status(500).json({ message: "failed to create wishlist" });
  }
});

router.route("/:id").delete(verifyUser, async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.json({ message: "Hotel Deleted from Wishlist" });
  } catch (error) {
    res.status(500).json({ message: "Could not delete hotel from wishlist" });
  }
});

router.route("/").get(verifyUser, async (req, res) => {
  try {
    const wishlist = await Wishlist.find({});
    wishlist
      ? res.json(wishlist)
      : res.json({ message: "No items found in the wishlist" });
  } catch (error) {
    console.log(error);
    res.status(500).json(err);
  }
});
module.exports = router;
