// const express = require("express");
// const { authenticate } = require("../middlewares/authenticate.middleware");
// const authorize = require("../middlewares/authorize.middleware");

// const Product = require("../models/product.model");

// const router = express.Router();

// router.post("", authenticate, async (req, res) => {
//   try {
//     const product = await Product.create({
//       ...req.body,
//       user_id: req.user._id,
//     });

//     return res.send(product);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// router.get("", async (req, res) => {
//   try {
//     const products = await Product.find();

//     return res.send(products);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// router.get(":id", authenticate, async (req, res) => {
//   try {
//     const products = await Product.find({ user_id: req.user._id });

//     return res.send(products);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });
