import React from 'react'

import {
  RESET,
  sendVerificationEmail,
} from "../redux/features/auth/AuthSlice";
import { useDispatch } from 'react-redux';

const Notify = () => {
    const dispatch = useDispatch();

  const sendVerEmail = async () => {
    await dispatch(sendVerificationEmail());
    await dispatch(RESET());
    console.log("Resend Link clicked");
  };
  return (
    <div>
       <button onClick={sendVerEmail} style={{cursor:"pointer"}}>Click meyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</button>
    </div>
  )
}

export default Notify