// const passport = require("passport");
// const FacebookStrategy = require("passport-facebook").Strategy;
// const User = require("../models/User.model");
// const jwt = require("jsonwebtoken");
// const req = require("express/lib/request");

// const newToken = (user) => {
//   return jwt.sign({ user }, process.env.SECRET_KEY);
// };

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FACEBOOK_APP_ID,
//       clientSecret: process.env.FACEBOOK_APP_SECRET,
//       callbackURL: "http://localhost:8000/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//         console.log(user);
//         return cb(err, user);
//       });
//     }
//   )
// );

// module.exports = {passportf: passport};
// };
