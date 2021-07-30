import { authTypes, cartTypes } from "../types";
const initialstate = {
  message: "",
  severity: "",
  open: false,
};
let success = "success";
let error = "error";

const option = {
  position: 'bottom-center'
}

const snackReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "HIDE_SNACKBAR":
      return initialstate;
    case "SHOW_SNACKBAR":
      const severnity = action.payload.severity

      if (severnity == 'success') {
        return {
          ...state,
          message: action.payload.data || "success",
          severity: success,
          open: true,
        };
        // return cogoToast.success(action.payload.data || "Success", option)
      } else if (severnity == 'warn') {
        return {
          ...state,
          message: action.payload.data || "warn",
          severity: success,
          open: true,
        };
      } else if (severnity == 'error') {
        return {
          ...state,
          message: action?.payload?.data?.error?.response?.data?.message || action.payload.data || 'Error',
          severity: error,
          open: true,
        };
        // return cogoToast.error(action?.payload?.data?.error?.response?.data?.message || action.payload.data || 'Error', option)
      }
    case authTypes.REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload.data.message || "Success",
        severity: success,
        open: true,
      };
    // return cogoToast.success(action.payload.data.message || "Success", option)

    case authTypes.REGISTER_FAIL:
      return {
        ...state,
        message: action.payload.data.message || "Error",
        severity: error,
        open: true,
      };
    // return cogoToast.error(action.payload.data.message || "Error", option)

    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload.data.message || "Success",
        severity: success,
        open: true,
      };


    // return cogoToast.success(action.payload.data.message || "Success", option)

    case authTypes.SIGN_OUT:
      return {
        ...state,
        message: 'Logged out' || "Success",
        severity: success,
        open: true,
      };
    // return cogoToast.success('Logged out', option)

    // case cartTypes.REMOVE_ITEM:
    //   return cogoToast.success(action.payload.data.message || "Success", option)

    // case cartTypes.ADD_ITEM_SUCCESS:
    //   return cogoToast.success(action.payload.data.message || "Success", option)

    // case cartTypes.ADD_ITEM:
    //   return cogoToast.success(action.payload?.data?.message || "Success", option)

    // case cartTypes.CLEAR_ITEM_FROM_CART:
    //   return cogoToast.success(action.payload.data.message || "Success", option)


    default:
      return state;
  }
};

export default snackReducer;
