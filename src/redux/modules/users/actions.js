import { SET_USERS_LIST, ERROR_GET_USERS_LIST } from "./types";
import { usersApi } from "../../../services";

export const getUsersList = (searchUser = null) => async dispatch => {
  try {
    const getData = await usersApi.getAllUsers(searchUser);

    if (getData) {
      dispatch({
        type: SET_USERS_LIST,
        payload: getData
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
