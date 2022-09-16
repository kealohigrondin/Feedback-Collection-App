const express = require("express");
require("./services/passport"); //doesn't need to be assigned to anything since the file isn't returning anything. Just need to attach it to this file for usage
const authRoutes = require("./routes/authRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

/////Attach routes to express app/////
authRoutes(app); //could also get rid of authroutes const and condense into:
/* require("./routes/authRoutes")(app) */

/////Spin up app on PORT/////
app.listen(PORT);
