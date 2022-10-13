import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";

import { updateFormState } from "../../actions";
import SurveyField from "./SurveyField";
import {
  validateEmails,
  required,
  composeValidators,
} from "../../utils/formValidators";

const FIELDS = [
  {
    label: "Subject Line",
    name: "subjectLine",
    validate: required,
  },
  {
    label: "Recipient List (comma separated)",
    name: "recipients",
    validate: composeValidators(validateEmails, required),
  },
  {
    label: "Survey Title",
    name: "surveyTitle",
    validate: required,
  },
  {
    label: "Email Body",
    name: "emailBody",
    validate: required,
  },
];

class SurveyForm extends React.Component {
  state = { submitted: false };

  handleFormSubmit = (values) => {
    this.props.updateFormState("surveyForm", values);
    this.setState({ submitted: true });
    this.props.onSurveySubmit();
  };

  render() {
    return (
      <div className="ui segment">
        <h2>Send a Survey</h2>
        <Form
          onSubmit={this.handleFormSubmit}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form className="ui form error" onSubmit={handleSubmit}>
              {FIELDS.map(({ label, name, validate }) => (
                <Field
                  key={name}
                  label={label}
                  type="text"
                  name={name}
                  component={SurveyField}
                  validate={validate}
                />
              ))}
              <Link to="/dashboard" className="ui button basic red">
                Cancel
              </Link>
              <button
                className="ui button primary"
                type="submit"
                disabled={submitting}
              >
                Submit
              </button>
              {this.state.submitted ? <p>Input received!</p> : null}
            </form>
          )}
        ></Form>
      </div>
    );
  }
}
export default connect(null, { updateFormState })(SurveyForm);
