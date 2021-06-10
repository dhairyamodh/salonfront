import { authTypes, languageTypes } from "../types";

export const signIn = () => {
  return {
    type: authTypes.SIGNIN,
  }
};

export const signInSuccess = () => {
  return {
    type: authTypes.SIGNIN_SUCCESS,
  }
};

export const signOut = () => {
  return {
    type: authTypes.SIGN_OUT,
  }
};

export const signUp = () => {
  return {
    type: authTypes.SIGNUP,
  }
};

export const forgotPass = () => {
  return {
    type: authTypes.FORGOTPASS,
  }
};
