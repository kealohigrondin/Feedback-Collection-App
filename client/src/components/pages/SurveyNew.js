import React from "react";
import SurveyForm from "../surveys/SurveyForm";
import SurveyFormReview from "../surveys/SurveyFormReview";

class SurveyNew extends React.Component {
  state = { showFormReview: false };

  render() {
    return (
      <>
        <span>SurveyNew page</span>
        {this.state.showFormReview ? (
          <SurveyFormReview
            onCancel={() => this.setState({ showFormReview: false })}
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
