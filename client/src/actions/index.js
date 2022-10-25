import axios from "axios";
import { FETCH_USER, UPDATE_FORM_STATE, FETCH_SURVEYS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/auth/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateFormState = (form, state) => {
  return {
    type: UPDATE_FORM_STATE,
    payload: state,
    form,
  };
};

/**
 *
 * @param {Object{}} formValues object containing a survey form's values like
 * subjectLine:"hello from gmail"
 * recipients:"haynbaseball14@yahoo.com"
 * surveyTitle:"Title of my survey"
 * emailBody:"body of the email"
 * @returns
 */
export const submitSurvey = (formValues) => async (dispatch) => {
  const res = await axios.post("/api/surveys", formValues);
  dispatch({ type: FETCH_USER, payload: res.data }); //user with new # of credits is returned
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
