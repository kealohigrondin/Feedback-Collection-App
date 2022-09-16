const passport = require("passport");
module.exports = (app) => {
  /////Set up endpoints/////
  app.get("/", (req, res) => {
    res.send({ hello: "world" });
  });

  //passport knows to reference the GoogleStrategy as 'google' (as referenced below)
  //email is one of many permissions we can ask google for (could as for contactlist, photos, etc)
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email"] })
  );

  //this endpoint is hit when /auth/google successfully auths user and sends them back to server
  //exchanges a code received from google in the /auth/google callback and gets user info
  app.get("/auth/google/callback", passport.authenticate("google"));
};
