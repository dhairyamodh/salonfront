import { authTypes, cartTypes } from "../types";
import cogoToast from 'cogo-toast';

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

    case "SHOW_SNACKBAR":
      const severnity = action.payload.severity
      if (severnity == 'success') {
        return cogoToast.success(action.payload.data || "Success", option)
      } else if (severnity == 'warn') {
        return cogoToast.warn(action.payload.data || "Success", option)
      } else {
        return cogoToast.error(action.payload.data.error.response.data.message || 'Error', option)
      }
    case authTypes.REGISTER_SUCCESS:
      return cogoToast.success(action.payload.data.message || "Success", option)

    case authTypes.REGISTER_FAIL:
      return cogoToast.error(action.payload.data.message || "Error", option)

      return {
        ...state,
        message: action.payload.data.message || "Success",
        severity: error,
        open: true,
      };
    case authTypes.LOGIN_SUCCESS:
      return cogoToast.success(action.payload.data.message || "Success", option)

    case authTypes.SIGN_OUT:
      return cogoToast.success('Logged out', option)

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
