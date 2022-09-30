import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";

import { handleToken } from "../actions";
// see
// https://www.npmjs.com/package/react-stripe-checkout
// for documentation on react-stripe-checkout

class Payments extends React.Component {
  render() {
    // debugger; // insert breakpoint in browser
    return (
      <StripeCheckout
        name="Feedback Collection App"
        amount={500}
        description="$5 for 5 email credits"
        token={(token) => this.props.handleToken(token)} //expecting callback function for after stripe comes back with token representing the charge
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
      {/* you can pass a jsx element to StripeCheckout to replace the default html */}
        <button className="ui button primary">Add Credits</button>
      </StripeCheckout>
    );
  }
}
export default connect(null, { handleToken })(Payments);
