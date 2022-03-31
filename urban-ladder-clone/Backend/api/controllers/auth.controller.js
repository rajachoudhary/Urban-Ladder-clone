const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../../src/models/user.model");
const passport = require("../configs/google-oauth");

passport.serializeUser(function (token, done) {
  done(null, token);
});

passport.deserializeUser(function (token, done) {
  done(null, token);
});

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    // successRedirect: `${process.env.URL}/users/getToken`,
    failureRedirect: "/404",
  }),
  (req, res) => {
    return res.redirect(`http://localhost:3000/code=${req.token}`);
  }
);
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    return res.redirect(`http://localhost:3000/code=${req.token}`);
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
