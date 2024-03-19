import * as api from "../../services/auth";
import * as types from '../types/authType';
import { isValidToken } from "../../utils/tokenUtils";
import { toast } from "react-toastify";

export const initializeAuth = () => async (dispatch) => {
  const accessToken = JSON.parse(localStorage.getItem("profile"))?.token;
  if (accessToken) {
    if (isValidToken(accessToken)) {
      dispatch(setAccessToken(accessToken));
      dispatch(setUserData(JSON.parse(localStorage.getItem("profile"))));
    } else {
      console.log('error');
    }
  }
};

export const setAccessToken = (accessToken) => async (dispatch) => {
  dispatch({ type: types.SET_ACCESS_TOKEN, payload: accessToken });
};

export const setUserData = (userData) => async (dispatch) => {
  dispatch({ type: types.SET_USER_DATA, payload: userData });
};

export const setInitialAuthState = (navigate) => async (dispatch) => {
  await dispatch({ type: types.LOGOUT });
  navigate("/signin");
};

export const loginAction = (formData, navigate) => async (dispatch) => {
  try {
    const respone = await api.login(formData)
    localStorage.setItem("profile", JSON.stringify(respone?.data));
    if (+respone?.statusCode === 200) {
      toast.success("Welcome back !");
      dispatch({
        type: types.SIGNIN_SUCCESS,
        payload: respone?.data,
      });
      navigate("/");
    } else if (+respone?.statusCode !== 200) {
      respone.errors?.map((error) => {
        toast.error(error);
        return false;
      })
      dispatch({
        type: types.SIGNIN_FAIL,
        payload: respone?.data,
      });
    }
    return;
  } catch (error) {
    await dispatch({
      type: types.SIGNIN_FAIL,
      payload: types.ERROR_MESSAGE,
    });
    navigate("/signin");
  }
}

export const registerAction = (formData, navigate) => async (dispatch) => {
  try {
    const respone = await api.register(formData)
    localStorage.setItem("profile", JSON.stringify(respone?.data));
    if (+respone?.statusCode === 200) {
      toast.success("Welcome to Sandal world !");
      dispatch({
        type: types.SIGNUP_SUCCESS,
        payload: respone?.data,
      });
      navigate("/");
    } else if (+respone?.statusCode !== 200) {
      respone.errors?.map((error) => {
        toast.error(error);
        return false;
      })
      dispatch({
        type: types.SIGNIN_FAIL,
        payload: respone?.data,
      });
    }
    return;
  } catch (error) {
    await dispatch({
      type: types.SIGNIN_FAIL,
      payload: types.ERROR_MESSAGE,
    });
    navigate("/signin");
  }
}

export const logoutAction = (navigate) => async (dispatch) => {
  try {
    // const { data } = await api.logout();
    localStorage.removeItem("profile");
    dispatch({ type: types.LOGOUT, payload: {} });
    navigate("/login");
  } catch (error) {
    dispatch({ type: types.LOGOUT, payload: types.ERROR_MESSAGE });
  }
};