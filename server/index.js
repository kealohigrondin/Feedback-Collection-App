const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport"); //doesn't need to be assigned to anything since the file isn't returning anything. Just need to attach it to this file for usage
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

/////Connect to mongoDB via mongoose/////
mongoose.connect(keys.mongoURI);

/////Attach routes to express app/////
authRoutes(app); //could also get rid of authroutes const and condense into:
/* require("./routes/authRoutes")(app) */

/////Spin up app on PORT/////
app.listen(PORT);
