import { combineReducers } from "redux";
import authReducer from "./authReducer";
import formReducer from "./formReducer";
import surveyReducer from "./surveyReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  surveys: surveyReducer,
});
