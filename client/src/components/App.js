import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser } from "../actions";
import Nav from "./Nav";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import SurveyNew from "./pages/SurveyNew";

class App extends React.Component {
  constructor(props) {
    super(props);
    //see if user is logged in with google already
    this.props.fetchUser();
  }

  render() {
    return (
      <>
        <Nav />
        <div className="ui container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/surveys/new" element={<SurveyNew />} />
            {/* <Route path="/signin" element={<SignIn />} /> */}
            {/* <Route path="/signout" element={<SignOut />} /> */}
          </Routes>
        </div>
      </>
    );
  }
}

export default connect(null, { fetchUser })(App);
