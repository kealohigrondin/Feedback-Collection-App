const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");
const User = mongoose.model("users"); //pulls the schema out of mongoose

//turning an user into an id for mongodb storage???
passport.serializeUser((user, done) => {
  done(null, user.id); //this id is the mongoDB generated _id value, not tied directly to google
});

//turn an id into a user
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    console.log(`User ${id} found`);
    done(null, user); //goes to next middleware/actual request function with the user
  });
});

const gOptions = {
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: "/auth/google/callback", //tells it where to send the user back to after authing them
  proxy: true, //enables https rather than http
};

// alternate way to call async functions that return promises instead of appending the
//   async function call with then(res => {})
const gStrategy = new GoogleStrategy(
  gOptions,
  async (accessToken, refreshToken, profile, done) => {
    //callback function that runs after auth/google/callback gets a result from google
    //check that the user doesn't exist yet
    const existingUser = await User.findOne({ googleId: profile.id });
    if (existingUser) {
      return done(null, existingUser); //no error, return with the existing user
    }

    //creates a new user and adds to mongodb
    const newUser = await new User({ googleId: profile.id }).save();
    done(null, newUser);
  }
);
passport.use(gStrategy); //tell passport to use this strategy for authentication
