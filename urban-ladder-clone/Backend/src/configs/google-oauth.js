const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");
const newToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      let user = await User.findOne({ email: profile._json.email });
      if (user) {
        user = await User.findOne({ email: profile._json.email });
      } else {
        user = await User.create({
          name: profile._json.name,
          email: profile._json.email,
          roles: ["customer"],
        });
      }
      console.log(user);
      let token = newToken(user);
      request.token = token;
      return done(null, token);
    }
    // callback with num and hte user object
  )
);

module.exports = passport;
