require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connect = require("./configs/db");
const authController = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");

let app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http:localhost:3000",
    methods: "GET,POST,PATCH,DELETE",
    credentials: true,
  })
);
app.use("/auth", authController);
app.use("/users", userController);
app.use("/products", productController);

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log("Running on PORT: ", process.env.PORT);
  } catch (e) {
    console.log(e.message);
  }
});
