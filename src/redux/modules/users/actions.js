import { SET_USERS_LIST, ERROR_GET_USERS_LIST } from "./types";
import { usersApi } from "../../../services";

export const getUsersList = (searchUser = null) => async dispatch => {
  try {
    const data = await usersApi.getAllUsers(searchUser);

    if (data) {
      dispatch({
        type: SET_USERS_LIST,
        payload: data
      });
    } else {
      dispatch({
        type: ERROR_GET_USERS_LIST
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: ERROR_GET_USERS_LIST
    });
  }
};
