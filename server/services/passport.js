const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");
const User = mongoose.model("users"); //pulls the schema out of mongoose

//turning an user into an id for mongodb storage???
passport.serializeUser((user, done) => {
  console.log("Serializing user: " + user);
  done(null, user.id); //this id is the mongoDB generated _id value, not tied directly to google
});

//turn an id into a user
passport.deserializeUser((id, done) => {
  console.log("Deserializing user with id: " + id);
  User.findById(id).then((user) => {
    console.log("User found " + user);
    done(null, user); //stores user as a cookie I think?
  });
});

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
