import axios from "axios";
import { FETCH_USER, UPDATE_FORM_STATE } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/auth/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  console.log(res);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateFormState = (form, state) => (dispatch) => {
  dispatch({
    type: UPDATE_FORM_STATE,
    payload: state,
    form,
  });
};
