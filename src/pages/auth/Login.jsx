import React, { useEffect, useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { validateEmail } from "../../redux/features/auth/AuthService";
import "../../components/login/LoginStyles.css"

import {
  login,
  loginWithGoogle,
  RESET,
  sendLoginCode,
} from "../../redux/features/auth/AuthSlice";
import styles from "./auth.module.scss";
import { GoogleLogin } from "@react-oauth/google";
import Notification from "../../components/notification/Notification";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess, message, isError, twoFactor } =
    useSelector((state) => state.auth);

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };

    // console.log(userData);
    await dispatch(login(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/buyCrypto");
    }

    if (isError && twoFactor) {
      dispatch(sendLoginCode(email));
      navigate(`/loginWithCode/${email}`);
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate, isError, twoFactor, email]);

  const googleLogin = async (credentialResponse) => {
    console.log(credentialResponse);
    await dispatch(
      loginWithGoogle({ userToken: credentialResponse.credential })
    );
  };

  return (
    <div className="login_container">
     {isLoading && <Loader/>}
    <div className="login_form_container">
      <div className="left">
      <BiLogIn size={35} color="#999" />

      <form onSubmit={loginUser } className="form_container">
      <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
              className="styles_input"
            />
            <PasswordInput
            
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />

            <button type="submit"   className="styles_green_btn">
              Login
            </button>
            <GoogleLogin
              onSuccess={googleLogin}
              onError={() => {
                console.log("Login Failed");
                toast.error("Login Failed");
              }}
            />
          </form>
      </div>
      <div className="right">
      <Link to="/forgot">Forgot Password?</Link>
         
            <p>  Don't have an account? </p>
           <button className="white_btn">
           <Link to="/register">Register</Link>
           </button>
           <Link to="/">Home</Link>
         
      </div>
    </div>


    </div>
  );
};

export default Login;
