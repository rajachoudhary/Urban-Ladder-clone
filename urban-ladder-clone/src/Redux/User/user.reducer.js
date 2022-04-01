import {
  USER_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_LOGOUT,
  USER_SOCIAL,
} from "./user.actionType";

const initState = {
  isLoading: false,
  isError: false,
  message: "",
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
        message: "",
      };

    case USER_FAILURE:
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: payload,
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
    case USER_SOCIAL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: localStorage.getItem("accesstoken"),
      };
    default:
      return state;
  }
};
