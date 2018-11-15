import { SET_USERS_LIST, ERROR_GET_USERS_LIST } from "./types";
import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_LIST: {
      const { users } = action.payload;
      return {
        ...state,
        list: users
      };
    }
    case ERROR_GET_USERS_LIST: {
      return {
        ...state,
        error: true
      };
    }
    default:
      return state;
  }
};
