import React from "react";
import { Navigate } from "react-router-dom";
import SurveyForm from "../surveys/SurveyForm";
import SurveyFormReview from "../surveys/SurveyFormReview";

class SurveyNew extends React.Component {
  state = { showFormReview: false };

  returnToDashboard = () => {
    return <Navigate to="/dashboard" />;
  };
  render() {
    return (
      <>
        <span>SurveyNew page</span>
        {this.state.showFormReview ? (
          <SurveyFormReview
            onCancel={() => this.setState({ showFormReview: false })}
            onFormSubmit={this.returnToDashboard}
          />
        ) : (
          <SurveyForm
            onSurveySubmit={() => this.setState({ showFormReview: true })}
          />
        )}
      </>
    );
  }
}
export default SurveyNew;
