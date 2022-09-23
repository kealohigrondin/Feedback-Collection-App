const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport"); //doesn't need to be assigned to anything since the file isn't returning anything. Just need to attach it to this file for usage

const app = express();
const PORT = process.env.PORT || 5000;

/////Enable Cookies/////
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000, // 30 days (in milliseconds)
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize()); //.use attaches middleware to the express app
app.use(passport.session());    // passes data thru the middleware before hitting app

/////Connect to mongoDB via mongoose/////
mongoose.connect(keys.mongoURI);

/////Attach routes to express app/////
// const authRoutes = require("./routes/authRoutes");
// authRoutes(app); //these two lines are equivalent to:
require("./routes/authRoutes")(app);

/////Spin up app on PORT/////
app.listen(PORT);
