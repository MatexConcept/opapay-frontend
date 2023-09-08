import SuccessLogo from "../../assets/404-tick.png";
import "./BuySuccessStyle.css";

import useRedirectLogoutUser from '../../customHook/useRedirectLogoutUser'
import { Link } from "react-router-dom";

const BuySuccess = () => {
  useRedirectLogoutUser("/login")

  return (
    <div className="buySuccessContainer">
      <div className="popup">
        <div class="svg-container">
        <div class="success-animation">
<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
</div>
        </div>
        <h2>Transaction Successful!!</h2>
        <p>
          Your payment has been processed <br />
          and confirmed without any issues.
        </p>
<Link to='/buyCrypto' className="DoneLink">
<button type="button" className="DoneBtn">Done</button>
</Link>
      </div>
    </div>
  );
};

export default BuySuccess;
