import React from "react";
import { useDispatch } from "react-redux";
import {
  RESET,
  sendVerificationEmail,
} from "../../redux/features/auth/AuthSlice";
import "./Notification.scss";

const Notification = () => {
  const dispatch = useDispatch();

  const sendVerEmail = async () => {
    await dispatch(sendVerificationEmail());
    await dispatch(RESET());
  };

  return (
    <div className="containerrr">
      <div className="alert">
        <small>
          message:
        </small>
        <small>
        &nbsp; to Proceed, check your email for a verification link.
        
        </small>
      
        <small className="v-link" onClick={sendVerEmail}>
          Resend Link
        </small>
      </div>
      
    </div>
  );
};

export default Notification;
