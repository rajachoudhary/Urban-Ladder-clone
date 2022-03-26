const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const passport = require("../configs/google-oauth");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    // successRedirect: "http://localhost:3000/",
    failureRedirect: "/404",
  }),
  (req, res) => {
    return res.redirect("/users/getToken");
  }
);

const newToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};

router.post("/register", async (req, res) => {
  try {
    console.log("fe");
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json("User already exists, try with a diferent email adddres");
    }
    user = await User.create(req.body);

    let token = newToken(user);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json("User email or password is incorrect");
    }
    const matching = user.checkPassword(req.body.password);
    if (!matching) {
      return res.status(400).json("User email or password is incorrect");
    }
    let token = newToken(user);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ status: "failed", message: err.message });
  }
});

module.exports = router;
