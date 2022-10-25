import React from "react";
import { connect } from "react-redux";
import { deleteSurvey, fetchSurveys } from "../../actions/index";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  deleteSurvey(id) {
    this.props.deleteSurvey(id);
  }

  renderSurveys() {
    if (!this.props.surveys) {
      return <p>No Active Surveys</p>;
    }
    return this.props.surveys.map((survey) => {
      return (
        <div className="ui raised card" key={survey._id}>
          <div className="content">
            <h2 className="header">{survey.subject}</h2>
            <h3 className="ui sub header">{survey.title}</h3>
            <div className="description">{survey.body}</div>
          </div>
          <div className="extra content">
            <button
              className="circular ui icon button red right floated"
              onClick={() => {
                this.deleteSurvey(survey._id);
              }}
            >
              <i className="ui icon cancel" />
              End Survey
            </button>
            <p>
              YES: {survey.yes} NO: {survey.no}
            </p>
            <p>Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Currently Running Surveys</h2>
        <div className="ui two stackable cards">{this.renderSurveys()}</div>
      </div>
    );
  }
}
const mapStateToProps = ({ surveys }) => {
  return { surveys };
};
export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
