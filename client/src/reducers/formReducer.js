import { UPDATE_FORM_STATE } from "../actions/types";

export default function formReducer(state = null, action) {
  switch (action.type) {
    case UPDATE_FORM_STATE:
      return { ...state, [action.form]: action.payload };
    default:
      return state;
  }
}
