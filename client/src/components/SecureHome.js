import React from "react";
// import requireAuth from "./requireAuth";

class SecureHome extends React.Component {
  render() {
    return (
      <div>
        <h1>Secure Homepage </h1>
        <p>(user is logged in at this point)</p>
      </div>
    );
  }
}
// export default requireAuth(SecureHome);
export default SecureHome;
