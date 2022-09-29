import React from "react";
import StripeCheckout from "react-stripe-checkout";

// see
// https://www.npmjs.com/package/react-stripe-checkout
// for documentation on react-stripe-checkout

class Payments extends React.Component {
  render() {
    // debugger; // insert breakpoint in browser
    return (
      <StripeCheckout
        amount={500}
        description="$5 for 5 email credits"
        token={(token) => console.log("Token: ", token)} //expecting callback function for after stripe comes back with token representing the charge
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="ui button primary">Add Credits</button>
      </StripeCheckout>
    );
  }
}
export default Payments;
