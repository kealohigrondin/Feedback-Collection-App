import React from "react";
import { connect } from "react-redux";

class SurveyFormReview extends React.Component {
  state = { formReview: false };

  render() {
    return (
      <div className="ui segment">
        <h2>Confirm Survey</h2>
        <button className="ui button yellow" onClick={this.props.onCancel}>
          Cancel
        </button>
      </div>
    );
  }
}
const mapStateToProps = ({ form }) => {
  return { form };
};
export default connect(mapStateToProps)(SurveyFormReview);
