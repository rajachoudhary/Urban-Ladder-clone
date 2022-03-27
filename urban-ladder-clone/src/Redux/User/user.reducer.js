import {
  USER_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_LOGOUT,
} from "./user.actionType";

const initState = {
  isLoading: false,
  isError: false,
  token: "" || localStorage.getItem("accesstoken"),
};

export const User_reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER_SUCCESS:
      localStorage.setItem("accesstoken", payload);
      return {
        ...state,
        token: payload,
        isLoading: false,
        isError: false,
      };

    case USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case USER_LOGOUT: {
      localStorage.setItem("accesstoken", "");
      return {
        ...state,
        token: "",
        isLoading: false,
        isError: false,
      };
    }
    default:
      return state;
  }
};
