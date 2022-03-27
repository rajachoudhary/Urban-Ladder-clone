import {
  USER_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_LOGOUT,
  USER_SOCIAL,
} from "./user.actionType";

export const USER_request = () => {
  return {
    type: USER_REQUEST,
  };
};
export const USER_success = (payload) => {
  return {
    type: USER_SUCCESS,
    payload: payload,
  };
};

export const USER_failure = () => {
  return {
    type: USER_FAILURE,
  };
};

export const USER_logout = () => {
  return {
    type: USER_LOGOUT,
  };
};
export const USER_Social = () => {
  return {
    type: USER_SOCIAL,
  };
};
