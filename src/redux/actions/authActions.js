import { authTypes, } from "../types";
import authApi from '../api/authApi';
import checkIfAsyncReqSuccess from "./checkIfAsyncReqSuccess";
import { updateCartLocally } from "./cartActions";
import { getLocalStorageCart } from "helpers/cartHelpers";

export const signIn = () => {
  return {
    type: authTypes.SIGNIN,
  }
};

export const login = (data) => {
  return {
    type: authTypes.LOGIN,
    payload: {
      request: {
        url: authApi.LOGIN,
        method: "post",
        data: data,
      },
    },
  };
};

export const signInSuccess = () => {
  return {
    type: authTypes.SIGNIN_SUCCESS,
  }
};

export const signOut = () => {
  return (dispatch) => {
    const localItems = getLocalStorageCart()
    dispatch(updateCartLocally(localItems))
    return dispatch({
      type: authTypes.SIGN_OUT,
    })
  };
}

export const getUserDetails = (data, cb) => {
  return {
    type: authTypes.GET_USER_DETAILS,
    payload: {
      request: {
        url: authApi.GET_USER_DETAILS,
        method: "get",
        data: data
      },
    },

  };
};

export const signUp = () => {
  return {
    type: authTypes.SIGNUP,
  }
};

export const register = (data) => {
  return {
    type: authTypes.SIGNUP,
    payload: {
      request: {
        url: authApi.REGISTER,
        method: "post",
        data: data,
      },
    },
  };
};

export const signUpSuccess = () => {
  return {
    type: authTypes.SIGNUP_SUCCESS,
  }
};

export const forgotPass = () => {
  return {
    type: authTypes.FORGOTPASS,
  }
};
