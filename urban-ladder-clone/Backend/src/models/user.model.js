const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    mobile: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    // cart: [
    //   { type: mongoose.Schema.Types.ObjectId, ref: "item", required: true },
    // ],
    // wishlist: [
    //   { type: mongoose.Schema.Types.ObjectId, ref: "item", required: true },
    // ],
    // orders: [
    //   { type: mongoose.Schema.Types.ObjectId, ref: "order", required: true },
    // ],
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model("user", userSchema);

module.exports = User;
