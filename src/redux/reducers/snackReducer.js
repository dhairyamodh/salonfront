import { authTypes } from "../types";
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
        return cogoToast.success(action.payload.data.message || "Success", option)
      } else {
        console.log("action", action);
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

    default:
      return state;
  }
};

export default snackReducer;
