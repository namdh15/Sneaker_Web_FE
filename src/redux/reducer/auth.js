import * as types from "../types/authType";

const initialState = {
  userData: null,
  accessToken: null,
  signInError: null,
  signUpError: [],
  successMessage: null,
  contextAuthData: null,
  trustedAuthContextData: [],
  blockedAuthContextData: [],
  userPreferences: null,
  contextAuthError: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload ? payload : null,
      };
    case types.SET_USER_DATA:
      return {
        ...state,
        userData: payload ? payload : null,
      };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        userData: payload ? payload : null,
        accessToken: payload ? payload.token : null,
        successMessage: payload ? payload : null,
        signUpError: [],
      };

    case types.SIGNUP_FAIL:
      return {
        ...state,
        successMessage: null,
        signInError: null,
        signUpError: payload ? payload : [],
      };

    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        userData: payload ? payload : null,
        accessToken: payload ? payload.token : null,
        signInError: null,
        successMessage: payload ? payload : null,
      };

    case types.SIGNIN_FAIL:
      return {
        ...state,
        successMessage: null,
        signUpError: [],
        signInError: payload ? payload : null,
      };

    case types.LOGOUT:
      return {
        ...state,
        userData: null,
        accessToken: null,
        signInError: null,
        signUpError: [],
        successMessage: null,
      };

    case types.GET_CONTEXT_AUTH_DATA_SUCCESS:
      return {
        ...state,
        contextAuthData: payload ? payload : null,
        contextAuthError: null,
      };

    case types.GET_CONTEXT_AUTH_DATA_FAIL:
      return {
        ...state,
        contextAuthData: null,
        contextAuthError: payload ? payload : null,
      };

    case types.GET_TRUSTED_AUTH_CONTEXT_DATA_SUCCESS:
      return {
        ...state,
        trustedAuthContextData: payload ? payload : [],
        contextAuthError: null,
      };

    case types.GET_TRUSTED_AUTH_CONTEXT_DATA_FAIL:
      return {
        ...state,
        trustedAuthContextData: [],
        contextAuthError: payload ? payload : null,
      };

    case types.GET_USER_PREFERENCES_SUCCESS:
      return {
        ...state,
        userPreferences: payload ? payload : null,
        contextAuthError: null,
      };

    case types.GET_USER_PREFERENCES_FAIL:
      return {
        ...state,
        userPreferences: null,
        contextAuthError: payload ? payload : null,
      };

    case types.GET_BLOCKED_AUTH_CONTEXT_DATA_SUCCESS:
      return {
        ...state,
        blockedAuthContextData: payload ? payload : [],
        contextAuthError: null,
      };

    case types.GET_BLOCKED_AUTH_CONTEXT_DATA_FAIL:
      return {
        ...state,
        blockedAuthContextData: [],
        contextAuthError: payload ? payload : null,
      };

    case types.DELETE_CONTEXT_AUTH_DATA_FAIL:
    case types.UNBLOCK_CONTEXT_AUTH_DATA_FAIL:
    case types.BLOCK_CONTEXT_AUTH_DATA_FAIL:
      return {
        ...state,
        contextAuthError: payload ? payload : null,
      };

    case types.CLEAR_MESSAGE:
      return {
        ...state,
        successMessage: null,
        signInError: null,
        signUpError: [],
      };

    default:
      return state;
  }
};

export default authReducer;
