require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connect = require("./api/configs/db");
const authController = require("./api/controllers/auth.controller");
const userController = require("./api/controllers/user.controller");
const productController = require("./api/controllers/product.controller");
const cartController = require("./api/controllers/cart.controller");

let app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authController);
app.use("/api/users", userController);
app.use("/api/products", productController);
app.use("/api/cart", cartController);

app.listen(process.env.PORT || 8000, async () => {
  try {
    await connect();
    console.log("Running on PORT: ", process.env.PORT);
  } catch (e) {
    console.log(e.message);
  }
});
