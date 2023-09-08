import SuccessLogo from "../../assets/404-tick.png";
import "./BuySuccessStyle.css";
import useRedirectLogoutUser from "../../customHook/useRedirectLogoutUser";

import { Link } from "react-router-dom";
const BuySuccess = () => {
  useRedirectLogoutUser("/login");
 
  return (
    <div className="buySuccessContainer">
      <div className="popup">
        <div class="svg-container">
        <div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
</div>
            
        </div>
        <h2>Payment Processing and Verification</h2>
        <br />
        <p>
          Thanks for your interest! To proceed, <br /> please send the required
          cryptocurrency amount.
          <br /> Once received, we'll start the fund transfer.
        </p>
       <Link to='/sellCrypto' className="DoneLink">
       <button type="button" className="Done2Btn">
          Done
        </button>
       </Link>
      </div>
    </div>
  );
};

export default BuySuccess;
