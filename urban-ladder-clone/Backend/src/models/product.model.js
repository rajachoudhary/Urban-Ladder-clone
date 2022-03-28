const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    sub_title: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: String, required: true },
    priceSort: { type: Number, required: true },
    discount_price: { type: String, required: true },
    emi: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: [{ type: String }],
    finish: [{ type: String, required: true }],
    "Product Dimensions": { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
