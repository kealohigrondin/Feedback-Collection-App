const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  // requireLogin is a route-specific middleware
  app.post("/api/stripe", requireLogin, async (req, res) => {
    //cookie middleware attaches user based on the cookie stored in the browser (if user is logged in)
    //handle the token, go to stripe, and finalize the charge
    const charge = await stripe.charges.create({
      amount: 500, //in US cents
      currency: "usd",
      description: "Add credits to feedback collection app",
      source: req.body.id,
    });
    // console.log(charge);
    //update user's number of credits
    req.user.credits += 5;
    const user = await req.user.save(); //update db with user with purchased credits
    console.log("Credits added to account");
    res.send(user); //send new user back to the client
  });
};
