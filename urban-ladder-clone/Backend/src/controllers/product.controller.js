const express = require("express");
const { authenticate } = require("../middlewares/authenticate.middleware");
const authorize = require("../middlewares/authorize.middleware");

const Product = require("../models/product.model");

const router = express.Router();

router.post("", authenticate, async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
    });

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const products = await Product.find();

    return res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get(":id", authenticate, async (req, res) => {
  try {
    let id = req.params;
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
