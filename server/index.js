const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

/////App setup/////
const app = express();
const gOptions = {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: "/auth/google/callback", //tells it where to send the user back to after authing them
};
const gStrategy = new GoogleStrategy(gOptions, (accessToken, refreshToken, profile, done) => {
  console.log('accessToken', accessToken); //callback function that runs after callback gets a result from google
  console.log('refreshToken', refreshToken);
  console.log('profile', profile);
});
passport.use(gStrategy); //tell passport to use this strategy for authentication
const PORT = process.env.PORT || 5000;

/////Set up endpoints/////
app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

//passport knows to reference the GoogleStrategy as 'google' (as referenced below)
//email is one of many permissions we can ask google for (could as for contactlist, photos, etc)
app.get("/auth/google", passport.authenticate("google", { scope: ["email"] }));

//this endpoint is hit when /auth/google successfully auths user and sends them back to server
//exchanges a code received from google in the /auth/google callback and gets user info
app.get("/auth/google/callback", passport.authenticate("google")); 

/////Spin up app on PORT/////
app.listen(PORT);
