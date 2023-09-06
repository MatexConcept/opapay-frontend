
import { useDispatch, useSelector } from "react-redux";
import { RESET, verifyUser } from "../../redux/features/auth/AuthSlice";
import {Link, useParams} from "react-router-dom";
import Loader from '../../components/loader/Loader'
import logo from '../../assets/logo.svg'
import Email from '../../assets/undraw_verified_re_4io7.svg'
import '../../components/VerifyStyles.css'



const Verify = () => {
  const dispatch = useDispatch()
  const {verificationToken} = useParams();

  const {isLoading} = useSelector((state) => state.auth);

  const verifyAccount = async () => {
    await dispatch(verifyUser(verificationToken))
    await dispatch(RESET())
  }


  return (
    <section className="Verify-section">
        <div className="verify-logo">
        <h1>OPA  
        <span>PAY</span>
        </h1>

        </div>
      {isLoading && <Loader/>}
    
      <div className='--center-all'>
     <div className="verify-container">
     <div className="verify-content">
         <h2>Account Verification</h2>
          <p>To Verify your account, click the button below</p>
          
         <Link to='/buyCrypto'>
         <button className='--btn-primary' onClick={verifyAccount}>Verify Account</button>
         </Link>
      </div>
     </div>
         
          <div>
          <img src={Email} className="verify-svg"/>
          </div>
        
         
      </div>
    </section>
  )
}

export default Verify