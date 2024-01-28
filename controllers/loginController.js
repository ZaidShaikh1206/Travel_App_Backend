const User = require("../model/user.model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const loginHandler = async (req, res) => {
  try {
    const user = await User.findOne({ number: req.body.number });
    !user &&
      res
        .status(401)
        .json({ message: "User with the given Number not found " });

    const decodedPassword = await CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
    decodedPassword !== req.body.password &&
      res.status(401).json({ message: "Password is incorrect" });

    const { password, ...rest } = user._doc;
    const accessToken = jwt.sign(
      { username: user.username },
      process.env.ACCESS_TOKEN
    );

    res.json({ ...rest, accessToken });
  } catch (error) {
    console.log(error);
  }
};

module.exports = loginHandler;
