import React, { useEffect } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { BiLogIn } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import { TiUserAddOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { toast } from "react-toastify";
import { validateEmail } from "../../redux/features/auth/AuthService";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import '../../components/signUp/SignUpStyles.css'

import {
  RESET,
  register,
  sendVerificationEmail,
} from "../../redux/features/auth/AuthSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};
const Register = () => {
  const [formData, setFormData] = useState("");
  initialState;

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }
    return timesIcon;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Check Lower and Uppercase
    if (password && password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }

    // Check for numbers
    if (password && password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }

    // Check for special character
    if (password && password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }
    // Check for PASSWORD LENGTH
    if (password && password.length > 5) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);
  const registerUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }

    if (password.length < 6) {
      return toast.error("Password must be up to six characters");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      name,
      email,
      password,
    };

    // console.log(userData)
    await dispatch(register(userData));
    await dispatch(sendVerificationEmail());
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/profile");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);
  return (
    <div className="signup_container">
      {isLoading && <Loader />}
      <div className="signup_form_container">
        <div className="styles_left">

         
         
          <p> &nbsp; Already have an account &nbsp;</p>
          <Link to="/login">
           <button type="button" className="white_btn">
              Login
            </button>
           </Link>
          <Link to="/">Home</Link>
        
        </div>

        <div className="styles_right">
          <TiUserAddOutline size={35} color="#999" />
          <h2>Register</h2>
          <form onSubmit={registerUser} className="form_container">
          <input
           className="styles_input"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <input
           className="styles_input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <PasswordInput
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <PasswordInput
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={handleInputChange}
            onPaste={(e) => {
              e.preventDefault();
              toast.error("Cannot Paste into input field");
            }}
          />
          {/* Password Strength */}
      
          <div>
          <ul className="form-list">
              <li>
                <span className={styles.indicator}>
                  {switchIcon(uCase)}
                  &nbsp; Lowercase & UpperCase
                </span>
              </li>
              <li>
                <span className={styles.indicator}>
                  {switchIcon(num)}
                  &nbsp; Number(0-9)
                </span>
              </li>
              <li>
                <span className={styles.indicator}>
                  {switchIcon(sChar)}
                  &nbsp; special Character (!@#$%^&*)
                </span>
              </li>

              <li>
                <span className={styles.indicator}>
                  {switchIcon(passLength)}
                  &nbsp; At least 6 Character
                </span>
              </li>
            </ul>
          </div>
          
          <button type="submit" className="styles_green_btn">
            Register
          </button>
        </form>
          
        </div>

     

        
      </div>
    </div>
  );
};

export default Register;
