import axios from "axios";
import { GET_CURRENT_USER } from "./types";

export const getCurrentUser = () => async (dispatch) => {
  const res = await axios.get("/auth/current_user");
  dispatch({ type: GET_CURRENT_USER, payload: res.data });
};

// export const logout = () => async (dispatch) => {
//   const res = await axios.get("auth/logout");
//   dispatch({type:})
// };
