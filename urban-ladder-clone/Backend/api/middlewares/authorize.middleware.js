const Product = require("../../src/models/product.model");
module.exports = () => async (req, res, next) => {
  let permission = false;
  const { id } = req.params;
  const userChanging = await Product.findOne({ _id: id });
  const user = req.user;
  if (
    user.roles.includes("admin") ||
    userChanging.user_id.toString() == user._id
  ) {
    permission = true;
  }

  if (permission === false) {
    return res.status(403).json("Permission Denied");
  }
  return next();
};
