require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const passport = require("passport");
const User = require("../models/auth.model");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
passport.use(
  // eslint-disable-next-line camelcase
  new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({ id: jwt_payload.id }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    });
  })
);
