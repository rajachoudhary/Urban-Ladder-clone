const express = require("express");
const { authenticate } = require("../middlewares/authenticate.middleware");
const authorize = require("../middlewares/authorize.middleware");

const Entry = require("../models/entry.model");

const router = express.Router();

router.post("", authenticate, async (req, res) => {
  try {
    console.log(req.user._id, req.body);
    const item = await Entry.create({
      ...req.body,
      type: "cart",
      user: req.user._id,
    });

    return res.send(item);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", authenticate, async (req, res) => {
  try {
    const cart = await Entry.find({
      type: "cart",
      user: req.user._id,
    }).populate("product");
    return res.send({ cart });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     let { id } = req.params;
//     const products = await Product.find({ _id: id });

//     return res.send(products);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

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
router.delete("/order", authenticate, async (req, res) => {
  try {
    const product = await Entry.deleteMany({ user: req.user._id });

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
module.exports = router;
