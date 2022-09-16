const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const gOptions = {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: "/auth/google/callback", //tells it where to send the user back to after authing them
};
const gStrategy = new GoogleStrategy(
  gOptions,
  (accessToken, refreshToken, profile, done) => {
    console.log("accessToken", accessToken); //callback function that runs after callback gets a result from google
    console.log("refreshToken", refreshToken);
    console.log("profile", profile);
  }
);
passport.use(gStrategy); //tell passport to use this strategy for authentication
