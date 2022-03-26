const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",
        required: true,
      },
    ],
    delivered: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
