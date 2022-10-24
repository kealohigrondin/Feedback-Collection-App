import React from "react";
import { connect } from "react-redux";
import { submitSurvey } from "../../actions/index";

class SurveyFormReview extends React.Component {
  sent = false;

  sendSurvey = () => {
    this.props.submitSurvey(this.props.surveyForm);
    this.sent = true;
  };

  render() {
    return (
      <div className="ui segment">
        <h2>Confirm Survey</h2>
        <div>
          <div>
            <p>Title: {this.props.surveyForm.title}</p>
            <p>Subject Line: {this.props.surveyForm.subject}</p>
            <p>Email Body: {this.props.surveyForm.body}</p>
            <p>Recipients: {this.props.surveyForm.recipients}</p>
          </div>
        </div>
        <button className="ui button yellow" onClick={this.props.onCancel}>
          Edit Survey
        </button>
        <button
          className="ui button primary float right"
          onClick={this.sendSurvey}
        >
          Send Survey
        </button>
        {this.sent && this.props.onFormSubmit()}
      </div>
    );
  }
}
const mapStateToProps = ({ form }) => {
  return {
    surveyForm: form.surveyForm,
  };
};
export default connect(mapStateToProps, { submitSurvey })(SurveyFormReview);
