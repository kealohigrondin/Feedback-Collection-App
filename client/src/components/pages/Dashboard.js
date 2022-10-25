import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "../surveys/SurveyList";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard </h1>
        <p>(user is logged in at this point)</p>
        <p>
          When adding credits use 4242 4242 4242 4242 and any date/ccv since
          this is doesn't accept real payments
        </p>
        <SurveyList />
        <br />
        <Link
          to="/surveys/new"
          className="circular ui icon button red right floated"
        >
          <i className="icon plus" />
        </Link>
      </div>
    );
  }
}
// export default requireAuth(Dashboard);
export default Dashboard;
