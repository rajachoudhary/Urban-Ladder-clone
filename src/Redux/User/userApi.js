import axios from "axios";
import { useDispatch } from "react-redux";
import {
  USER_failure,
  USER_request,
  USER_success,
  USER_logout,
  USER_Social,
} from "./user.action";

// const dispatch = useDispatch();
export const loginApi = (params) => (dispatch) => {
  dispatch(USER_request());
  axios
    .post("https://urbanladderclone.herokuapp.com/api/auth/login", {
      email: params.email,
      password: params.pass,
    })
    .then((res) => {
      console.log(res);
      dispatch(USER_success(res.data.token));
    })
    .catch((res) => {
      dispatch(USER_failure());
    });
};
export const registerApi = (params) => (dispatch) => {
  dispatch(USER_request());
  axios
    .post("https://urbanladderclone.herokuapp.com/api/auth/register", {
      email: params.email,
      password: params.pass,
    })
    .then((res) => {
      console.log("login", res);
      dispatch(USER_success(res.data.token));
    })
    .catch((res) => {
      dispatch(USER_failure());
    });
};
export const logoutApi = (params) => (dispatch) => {
  dispatch(USER_logout());
};
export const socialApi = (params) => (dispatch) => {
  dispatch(USER_Social());
};
