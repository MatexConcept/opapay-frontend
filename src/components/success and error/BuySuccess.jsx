import SuccessLogo from "../../assets/404-tick.png";
import "./BuySuccessStyle.css";
import anim from '../../assets/animation/animation_llwd5ykq.json'
import Lottie from 'react-lottie'
import useRedirectLogoutUser from '../../customHook/useRedirectLogoutUser'
import { Link } from "react-router-dom";

const BuySuccess = () => {
  useRedirectLogoutUser("/login")
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
