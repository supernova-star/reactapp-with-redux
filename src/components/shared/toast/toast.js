import React, { useEffect } from "react";
import "./toast.scss";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ handleToast, theme, position, type, message }) => {
  const toastDetails = useSelector((state) => state.navigation.toastDetails);
  const notify = () => {
    toast[toastDetails.type](toastDetails.message, {
      position: toast.POSITION[toastDetails.position],
      autoClose: 3000,
      theme: toastDetails.theme,
    });
  };
  useEffect(() => {
    // notify();
    handleToast.current = notify;
  }, [handleToast, notify, toastDetails]);
  return (
    <div className="GeeksforGeeks">
      <ToastContainer transition={Bounce} role="alert" />
    </div>
  );
};

Toast.propTypes = {
  handleToast: PropTypes.func,
  theme: PropTypes.oneOf(["light", "dark", "colored"]),
  position: PropTypes.oneOf([
    "BOTTOM_LEFT",
    "BOTTOM_RIGHT",
    "BOTTOM_CENTER",
    "TOP_LEFT",
    "TOP_RIGHT",
    "TOP_CENTER",
  ]),
  type: PropTypes.oneOf(["success", "error", "info", "warning"]),
  message: PropTypes.string,
};

export default Toast;
