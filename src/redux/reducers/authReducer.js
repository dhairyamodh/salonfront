import { authTypes } from "../types"
import setToken from "../../helpers/setToken";
import removeToken from "../../helpers/removeToken";

const initState = {
  isAuthenticated: false,
  currentForm: 'signIn',
  loading: false,
  errors: undefined,
  bookings: []
}

const authReducer = (state = initState, action) => {
  const getData = () => action.payload.data;
  switch (action.type) {
    case authTypes.SIGNIN:
      return {
        ...state,
        currentForm: 'signIn',
      }

    case authTypes.LOGIN_SUCCESS:
      setToken(getData().token);
      return {
        ...state,
        isAuthenticated: true,
        name: getData().user.name,
        token: getData().token,
        ...getData().user,
      };

    case authTypes.LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };

    case authTypes.SIGN_OUT:
      removeToken();
      return {
        ...state,
        isAuthenticated: false,
      }

    case authTypes.SIGNUP:
      return {
        ...state,
        currentForm: 'signUp',
      }


    case authTypes.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        name: getData().user.name,
        ...getData().user,
        bookings: getData().bookings
      };

    case authTypes.GET_USER_DETAILS_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };

    case authTypes.REGISTER_SUCCESS:
      setToken(getData().token);
      return {
        ...state,
        isAuthenticated: true,
        name: getData().user.name,
        token: getData().token,
        ...getData().user,
      };

    case authTypes.FORGOTPASS:
      return {
        ...state,
        currentForm: 'forgotPass',
      };

    case authTypes.UPDATE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        name: getData().user.name,
        ...getData().user,
      };

    case authTypes.UPDATE_USER_DETAILS_FAIL:
      return {
        ...state,
        // isAuthenticated: true,
        // errors: action.payload.message
      };
    case authTypes.GET_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: getData().data,
      };

    default:
      return state
  }
}

export default authReducer