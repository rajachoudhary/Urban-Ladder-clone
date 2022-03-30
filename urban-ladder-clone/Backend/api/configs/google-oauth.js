const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../../src/models/user.model");
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");
const FacebookStrategy = require("passport-facebook").Strategy;
const newToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        "https://urbanladderclone.herokuapp.com/api/auth/google/callback",
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
        });
      }
      // console.log(user);
      let token = newToken(user);
      request.token = token;
      return done(null, token);
    }
    // callback with num and hte user object
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL:
        "https://urbanladderclone.herokuapp.com/api/auth/facebook/callback",
      profileFields: ["id", "emails", "name"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      let user = await User.findOne({ email: profile._json.email });
      if (user) {
        user = await User.findOne({ email: profile._json.email });
      } else {
        user = await User.create({
          email: profile._json.email,
        });
      }
      let token = newToken(user);
      req.token = token;
      return cb(null, token);
    }
  )
);

module.exports = passport;
