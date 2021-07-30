import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { hideSnackBar } from "../../../redux/action/snackActions";
// import cogoToast from 'cogo-toast';
import { hideSnackBar } from '../../redux/actions/snackActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  const { open: show, message, severity } = useSelector((state) => state.snack);
  const dispatch = useDispatch()
  const options = {
    // onClose: dispatch(hideSnackBar()),
    onClose: () => dispatch(hideSnackBar()),
    autoClose: 3000,
    hideProgressBar: true,
    position: 'bottom-center',
    closeButton: false,
  };
  useEffect(() => {
    if (show) {
      if (severity === 'success') {
        toast.success(message, options);
      } else if (severity === 'error') {
        toast.error(message, options);

      }
    }
  }, [show])
  return (
    show &&
    <div style={{ position: 'absolute', zIndex: 999999 }}>
      <ToastContainer />
    </div>
  );
};



export default Toast;
