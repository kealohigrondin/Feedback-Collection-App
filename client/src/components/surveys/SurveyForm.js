import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";

import { updateFormState } from "../../actions";
import SurveyField from "./SurveyField";

const FIELDS = [
  {
    label: "Survey Title",
    name: "surveyTitle",
  },
  {
    label: "Subject Line",
    name: "subjectLine",
  },
  {
    label: "Email Body",
    name: "emailBody",
  },
  {
    label: "Recipient List",
    name: "recipients",
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
          <form className="ui form" onSubmit={handleSubmit}>
            <fieldset>
              {FIELDS.map(({ label, name }) => (
                <Field
                  key={name}
                  label={label}
                  type="text"
                  name={name}
                  component={SurveyField}
                />
              ))}
              <Link
                to="/dashboard"
                className="ui button basic red"
                type="submit"
              >
                Cancel
              </Link>
              <button className="ui button primary" type="submit">
                Submit
              </button>
              {this.submitted ? <p>Input received!</p> : null}
            </fieldset>
          </form>
        )}
      ></Form>
    );
  }
}
export default connect(null, { updateFormState })(SurveyForm);
