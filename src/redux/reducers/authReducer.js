import { authTypes } from "../types"

const initState = {
  isAuthenticated: false,
  currentForm: 'signIn',
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authTypes.SIGNIN: {
      return {
        ...state,
        currentForm: 'signIn',
      }
    }
    case authTypes.SIGNIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
      }
    }
    case authTypes.SIGN_OUT: {
      return {
        ...state,
        isAuthenticated: false,
      }
    }
    case authTypes.SIGNUP: {
      return {
        ...state,
        currentForm: 'signUp',
      }
    }
    case authTypes.FORGOTPASS: {
      return {
        ...state,
        currentForm: 'forgotPass',
      }
    }

    default:
      return state
  }
}

export default authReducer