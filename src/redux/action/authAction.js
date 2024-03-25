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
  navigate("/login");
};

export const loginAction = (formData, navigate) => async (dispatch) => {
  try {
    const response = await api.login(formData)
    console.log(response);
    localStorage.setItem("profile", JSON.stringify(response?.data));
    if (+response?.statusCode === 200) {
      toast.success("Welcome back !");
      dispatch({
        type: types.SIGNIN_SUCCESS,
        payload: response?.data,
      });
      navigate("/");
    } else if (+response?.statusCode !== 200) {
      response.errors?.map((error) => {
        toast.error(error);
        return false;
      })
      dispatch({
        type: types.SIGNIN_FAIL,
        payload: response?.data,
      });
    }
    return;
  } catch (error) {
    await dispatch({
      type: types.SIGNIN_FAIL,
      payload: types.ERROR_MESSAGE,
    });
    navigate("/login");
  }
}

export const registerAction = (formData, navigate) => async (dispatch) => {
  try {
    const response = await api.register(formData)
    localStorage.setItem("profile", JSON.stringify(response?.data));
    if (+response?.statusCode === 200) {
      toast.success("Welcome to Sandal world !");
      dispatch({
        type: types.SIGNUP_SUCCESS,
        payload: response?.data,
      });
      navigate("/");
    } else if (+response?.statusCode !== 200) {
      response.errors?.map((error) => {
        toast.error(error);
        return false;
      })
      dispatch({
        type: types.SIGNIN_FAIL,
        payload: response?.data,
      });
    }
    return;
  } catch (error) {
    await dispatch({
      type: types.SIGNIN_FAIL,
      payload: types.ERROR_MESSAGE,
    });
    navigate("/login");
  }
}


export const loginAsAdminAction = (formData, navigate) => async (dispatch) => {
  try {
    const response = await api.loginAsAdmin(formData)
    localStorage.setItem("admin_profile", JSON.stringify(response?.data));
    if (+response?.statusCode === 200) {
      toast.success("Welcome back !");
      dispatch({
        type: types.SIGNIN_AS_ADMIN_SUCCESS,
        payload: response?.data,
      });
      navigate("/admin");
    } else if (+response?.statusCode !== 200) {
      response.errors?.map((error) => {
        toast.error(error);
        return false;
      })
      dispatch({
        type: types.SIGNIN_AS_ADMIN_FAIL,
        payload: response?.data,
      });
    }
    return;
  } catch (error) {
    await dispatch({
      type: types.SIGNIN_AS_ADMIN_FAIL,
      payload: types.ERROR_MESSAGE,
    });
    navigate("/login");
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