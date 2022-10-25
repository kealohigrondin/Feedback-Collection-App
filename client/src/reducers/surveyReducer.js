import { FETCH_SURVEYS } from "../actions/types";

export default function surveyReducer(state = null, action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload.surveys;
    default:
      return state;
  }
}
