import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { hideSnackBar } from "../../../redux/action/snackActions";
import cogoToast from 'cogo-toast';

const toast = () => {
  const { open: show, message, severity } = useSelector((state) => state.snack);
  return (
    show &&
    cogoToast.success(message)
  );
};



export default toast;
