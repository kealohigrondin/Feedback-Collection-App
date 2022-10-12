import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";

import { updateFormState } from "../../actions";
import SurveyField from "./SurveyField";
import { validateEmails } from "../../utils/validateEmails";

const required = (value) => (value ? undefined : "Required");

const FIELDS = [
  {
    label: "Subject Line",
    name: "subjectLine",
    validate: required,
  },
  {
    label: "Recipient List (comma separated)",
    name: "recipients",
    validate: validateEmails,
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
  submitted = false;

  handleSubmit = (values) => {
    this.props.updateFormState("surveyForm", values);
    this.submitted = true;
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
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
            {this.submitted ? <p>Input received!</p> : null}
          </form>
        )}
      ></Form>
    );
  }
}
export default connect(null, { updateFormState })(SurveyForm);
