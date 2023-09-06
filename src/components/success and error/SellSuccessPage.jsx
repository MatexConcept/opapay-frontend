import SuccessLogo from "../../assets/404-tick.png";
import "./BuySuccessStyle.css";
import useRedirectLogoutUser from "../../customHook/useRedirectLogoutUser";
import anim from '../../assets/animation/animation_llwe8bsu.json'
import Lottie from 'react-lottie'
import { Link } from "react-router-dom";
const BuySuccess = () => {
  useRedirectLogoutUser("/login");
  const defaultOptions = {
    loop: true,
    autoplay:true,
    animationData: anim,
    rendererSettings:{
        preserveAspectRatio: "xMidYMid slice",
    }
  }
  return (
    <div className="buySuccessContainer">
      <div className="popup">
        <div class="svg-container">
            <Lottie options={defaultOptions} width={100} height={100}/>
            
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
