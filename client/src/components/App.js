import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import Welcome from "./Welcome";
// import SignUp from "../components/auth/SignUp";
import SecureHome from "../components/SecureHome";
// import SignIn from "./auth/SignIn";
// import SignOut from "./auth/SignOut";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="ui container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/securehome" element={<SecureHome />} />
            {/* <Route path="/signin" element={<SignIn />} /> */}
            {/* <Route path="/signout" element={<SignOut />} /> */}
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
