import React from "react";
import { connect } from "react-redux";
import { Field, Form } from "react-final-form";
import { updateFormState } from "../../actions";

class SurveyForm extends React.Component {
  handleSubmit = async (values) => {
    window.alert(JSON.stringify(values, 0, 2));
    this.props.updateFormState("surveyForm", values);
  };
  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form className="ui form" onSubmit={handleSubmit}>
            <fieldset>
              <div className="field">
                <label>Survey Title</label>
                <Field
                  component="input"
                  name="surveyTitle"
                  type="text"
                  placeholder="Enter title for survey"
                />
              </div>
              <button className="ui button primary" type="submit">
                Submit
              </button>
            </fieldset>
          </form>
        )}
      ></Form>
    );
  }
}
export default connect(null, { updateFormState })(SurveyForm);
