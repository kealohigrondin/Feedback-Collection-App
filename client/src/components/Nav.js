import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { changeAuth } from "../actions/index";

class Nav extends React.Component {
  render() {
    return (
      <div className="ui primary menu" style={{ marginBottom: "2em" }}>
        <Link to="/" className="item">
          Home
        </Link>
        {/* <Link to="/signup" className="item">
          Sign Up
        </Link>
        <Link to="/signout" className="item">
          Sign Out
        </Link> */}
        <div className="right menu">
          <Link to="/signin" className="item">
            Sign In
          </Link>
        </div>
      </div>
    );
  }
}
export default Nav;
