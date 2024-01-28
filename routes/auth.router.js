const express = require("express");
const CryptoJS = require("crypto-js");
const router = express.Router();
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const signupHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");

router.route("/register").post(signupHandler);

router.route("/login").post(loginHandler);

module.exports = router;

// router.route("/login").post(async (req, res) => {
//   try {
//     const user = await User.findOne({ number: req.body.number });
//     !user && res.status(401).json({ message: "User not found" });

//     const decodedPassword = await CryptoJS.AES.decrypt(
//       user.password,k
//       process.env.PASSWORD_SECRET_KEY
//     ).toString(CryptoJS.enc.Utf8);
//     decodedPassword !== req.body.password &&
//       res.status(401).json({ message: "incorrect password" });

//     const { password, ...rest } = user._doc;

//     const accessToken = jwt.sign(
//       { username: user.username },
//       process.env.ACCESS_TOKEN
//     );
//     res.json({ ...rest, accessToken });
//   } catch (error) {
//     console.log(error);
//   }
// });

// const express = require("express");
// const CryptoJS = require("crypto-js");
// const router = express.Router();
// const User = require("../model/user.model");
// const jwt = require("jsonwebtoken");

// router.route("/register").post(async (req, res) => {
//   try {
//     const newUser = await new User({
//       username: req.body.username,
//       number: req.body.number,
//       email: req.body.email,
//       password: CryptoJS.AES.encrypt(
//         req.body.password,
//         process.env.PASSWORD_SECRET_KEY
//       ).toString(),
//     });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error Saving the user" });
//   }
// });

// module.exports = router;
