const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryImport.router");
const singleHotelRouter = require("./routes/singleHotel.router");
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");
const connectDB = require("./config/dbconfig");

const app = express();
const PORT = 3500;
app.use(express.json());
connectDB();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the landing page");
});

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);

app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to DB");

  app.listen(process.env.PORT || PORT, () => {
    console.log("Server is up and running");
  });
});

//mongodb+srv://zaidshaikh:<password>@cluster0.0vmwq6m.mongodb.net/?retryWrites=true&w=majority
