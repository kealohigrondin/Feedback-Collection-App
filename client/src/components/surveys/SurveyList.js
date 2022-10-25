import React from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions/index";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (!this.props.surveys) {
      return <p>No Active Surveys</p>;
    }
    return this.props.surveys.map((survey) => {
      return (
        <div className="ui raised card" key={survey.title}>
          <div className="content">
            <h2 className="header">{survey.subject}</h2>
            <h3 className="ui sub header">{survey.title}</h3>
            <div className="description">{survey.body}</div>
          </div>
          <div className="extra content">
            <span>
              YES: {survey.yes} NO: {survey.no}
            </span>
            <div className="right floated">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Currently Running Campaigns</h2>
        <div className="ui two cards">{this.renderSurveys()}</div>
      </div>
    );
  }
}
const mapStateToProps = ({ surveys }) => {
  return { surveys };
};
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
