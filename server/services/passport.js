const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");
const User = mongoose.model("users"); //pulls the model/schema out of mongoose

const gOptions = {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: "/auth/google/callback", //tells it where to send the user back to after authing them
};

const gStrategy = new GoogleStrategy(
  gOptions,
  (accessToken, refreshToken, profile, done) => {
    //callback function that runs after auth/google/callback gets a result from google
    //check that the user doesn't exist yet
    User.findOne({ googleId: profile.id }).then((existingUser) => {
      if (existingUser) {
        console.log("USER ALREADY EXISTS");
        done(null, existingUser); //no error, return with the existing user
      }
      //creates a new user and adds to mongodb
      new User({ googleId: profile.id }).save().then((newUser) => {
        console.log("NEW USER ADDED:\n ", newUser);
        done(null, newUser);
      });
    });
  }
);
passport.use(gStrategy); //tell passport to use this strategy for authentication
