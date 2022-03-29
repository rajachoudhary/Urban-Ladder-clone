const express = require("express");
const { authenticate } = require("../middlewares/authenticate.middleware");
const authorize = require("../middlewares/authorize.middleware");

const Product = require("../models/product.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const product = await Product.insertMany([...req.body]);

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const { category, page, limit, id, brand, sort } = req.query;
    let constraint = {};
    if (category) {
      constraint.category = category;
    }
    if (brand) {
      constraint.brand = brand;
    }
    if (id) {
      constraint.id = id;
    }
    console.log(constraint);
    const offset = (page - 1) * limit || 0;
    const limitTotal = limit || 5;
    const products = await Product.find(constraint)
      .skip(offset)
      .limit(limitTotal)
      .sort({ priceSort: sort });
    const count = await Product.find(constraint).countDocuments();
    console.log(count);
    return res.send({ count: count, products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const products = await Product.find({ _id: id });

    return res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// router.patch("/:id", [authenticate, authorize()], async (req, res) => {
//   try {
//     console.log(req.user);
//     const product = await Product.findByIdAndUpdate(
//       req.params.id,
//       {
//         ...req.body,
//       },
//       { new: true }
//     );

//     return res.send(product);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });
// router.delete("/:id", [authenticate, authorize()], async (req, res) => {
//   try {
//     console.log(req.user);
//     const product = await Product.findByIdAndDelete(req.params.id);

//     return res.send(product);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });
module.exports = router;
