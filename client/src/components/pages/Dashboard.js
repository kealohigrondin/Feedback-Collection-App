import React from "react";
import { Link } from "react-router-dom";
// import requireAuth from "./requireAuth";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Secure Dashboard </h1>
        <p>(user is logged in at this point)</p>
        <Link to="/surveys/new" className="circular ui icon button red right floated">
          <i className="icon plus" />
        </Link>
      </div>
    );
  }
}
// export default requireAuth(Dashboard);
export default Dashboard;
