import React from "react";
import requireAuth from "./requireAuth";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Secure Dashboard </h1>
        <p>(user is logged in at this point)</p>
      </div>
    );
  }
}
export default requireAuth(Dashboard);
// export default Dashboard;
