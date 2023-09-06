import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import { validateEmail } from "../../redux/features/auth/AuthService";
import { forgotPassword, RESET } from "../../redux/features/auth/AuthSlice";
// import styles from "./auth.module.scss";
import "../../components/login/ForgetStyles.css";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);

  const forgot = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter an email");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
    };

    await dispatch(forgotPassword(userData));
    await dispatch(RESET(userData));
  };

  return (
   <div className="forget-container-section">
     <div className="forget-container">
     
     {isLoading && <Loader />}

     <div>
       <div className="logo-container">
       <AiOutlineMail size={35} color="#999" />
       <h2>Forgot Password</h2>
       </div>

       <form onSubmit={forgot} className="forget-form">
         <div className="form-group">
         <label for='email'>Email</label>
           <input
             type="email"
             placeholder="Email"
             required
             name="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           />
         </div>

         <button type="submit" className="form-submit-btn">
           Get Reset Email
         </button>
       </form>

       <p className="signup-link">
         {" "}
         Don't have an account?? &nbsp;
         <Link to="/register">
           <span className="signup-link link">Sign up </span>
         </Link>
       </p>
     </div>
   
 </div>
   </div>
  );
};

export default Forgot;

{
  /* <div className={styles.links}>
<p>
  <Link to="/">- Home</Link>
</p>
<p>
  <Link to="/login">- Login</Link>
</p>
</div> */
}
