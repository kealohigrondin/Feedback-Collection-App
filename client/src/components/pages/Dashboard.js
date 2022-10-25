import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "../surveys/SurveyList";

class Dashboard extends React.Component {
  render() {
    return (
      <div style={{ paddingBottom: "5em" }}>
        <h1>Dashboard </h1>
        <p>
          When adding credits use "4242 4242 4242 4242" and any date/ccv/email
          since this doesn't accept real payments. No email will be sent so it
          can be a dummy email
        </p>
        <SurveyList />
        <br />
        <Link
          to="/surveys/new"
          className="circular ui icon button blue right floated"
        >
          <span style={{ paddingRight: "0.5em" }}>Create Survey</span>
          <i className="icon plus" />
        </Link>
      </div>
    );
  }
}
// export default requireAuth(Dashboard);
export default Dashboard;
