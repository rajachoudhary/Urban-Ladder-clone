const express = require("express");
const User = require("../models/User.model");

const router = express.Router();

router.get("/getToken", async (req, res) => {
  console.log("req,res", res, req);
  return res.status(200).json({ token: req.token });
});
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res.status(200).json({ data: users });
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json({ data: user });
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err.message });
  }
});

module.exports = router;
