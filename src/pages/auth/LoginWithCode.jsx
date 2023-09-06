import React, { useEffect, useState } from "react";
import { GrInsecure } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
// import PasswordInput from "../../components/passwordInput/PasswordInput";
import {
  loginWithCode,
  RESET,
  sendLoginCode,
} from "../../redux/features/auth/AuthSlice";
// import styles from "./auth.module.scss";
import '../../components/login/loginWithCodeStyles.css'

const LoginWithCode = () => {
  const [loginCode, setLoginCode] = useState("");
  const { email } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

  const sendUserLoginCode = async () => {
    await dispatch(sendLoginCode(email));
    await dispatch(RESET());
  };

  const loginUserWithCode = async (e) => {
    e.preventDefault();

    if (loginCode === "") {
      return toast.error("Please fill in the login code");
    }
    if (loginCode.length !== 6) {
      return toast.error("Access code must be 6 characters");
    }

    const code = {
      loginCode,
    };

    await dispatch(loginWithCode({ code, email }));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/profile");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <div className="container-form">
      {isLoading && <Loader />}
     
        <div className='container-form-content'>
          <div className="--flex-center">
            <GrInsecure size={35} color="#999" />
          </div>
          <h2>Enter Access Code</h2>
          <small> verification code sent to your email</small>

          <form onSubmit={loginUserWithCode} className="loginWithCodeForm">
            <input
              type="text"
              placeholder="Access Code"
              required
              name="loginCode"
              value={loginCode}
              onChange={(e) => setLoginCode(e.target.value)}
              className="style_input"
            />

            <button type="submit" className="button">
              <p className='resend'>Proceed To Login</p>
            </button>
            <div >
              <p onClick={sendUserLoginCode} className='resend'>
                <b>Resend Code</b>
              </p>
            </div>
          </form>
        </div>
    
    </div>
  );
};

export default LoginWithCode;

{/* <form class="form">
  <p class="heading">Verify</p>
 
  <div class="box">
  <input class="input" type="password" maxlength="1">
  <input class="input" type="password" maxlength="1"> 
  <input class="input" type="password" maxlength="1">
  <input class="input" type="password" maxlength="1">
  </div>
  <button class="btn1">Submit</button>
  <button class="btn2">Back</button>
</form> */}
