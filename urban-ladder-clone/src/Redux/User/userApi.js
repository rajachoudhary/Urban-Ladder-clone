import axios from "axios";
import { useDispatch } from "react-redux";
import {
  USER_failure,
  USER_request,
  USER_success,
  USER_logout,
} from "./user.action";

// const dispatch = useDispatch();
export const loginApi = (params) => (dispatch) => {
  dispatch(USER_request());
  axios
    .post("http://localhost:8000/auth/login", {
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
    .post("http://localhost:8000/auth/register", {
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
export const logoutApi = (params) => (dispatch) => {
  dispatch(USER_logout());
};
