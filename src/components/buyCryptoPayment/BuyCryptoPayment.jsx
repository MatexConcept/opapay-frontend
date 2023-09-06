import React, { useRef, useState } from "react";
// import nft from './nft.jpg';
import nft from "../../assets/nft.jpg";
import "./BuyCryptoPaymentStyles.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Modal = ({ open, onClose }) => {
  const form = useRef(null);
 

 
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6wjvv4f",
        "template_y8i937r",
        form.current,
        "AlnX-ypmqsN-JTvno"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      setIsLoading(false);
     
    
  };


  


  const handleClick = (e) => {
    e.preventDefault();

    const formElement = e.target.closest('form');

    if (formElement) {
      const inputs = formElement.querySelectorAll('input[required]');
      const isFormEmpty = Array.from(inputs).some((input) => !input.value.trim());

      if (!isFormEmpty) {
        setIsLoading(true);
        sendEmail(e);
      } else {
        toast.error("Input fields cannot be empty.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

 
  
  
  
  
  



  if (!open) return null;
  
  return (
    <div onClick={e => e.stopPropagation()} className="overlay" >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={nft} alt="/" className="modalImage" />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <div className="formCont">
            <form ref={form} onSubmit={sendEmail}>
              <h3>Personal Information</h3>
              <div className="coolinput">
                <label   className="text">
                  Account holder:
                </label>
                <input
                  type="text"
                  placeholder="please enter full name"
                  name="Account-Holder"
                   className="input"
                   required
                />
              </div>
              <div className="coolinput">
                <label   className="text">
                  Country:
                </label>
                <input type="text" name="Country"  className="input" required />
              </div>
              <div className="coolinput">
                <label   className="text">
                  Address of account holder:
                </label>
                <input
                  type="text"
                  placeholder="please enter your own address"
                  name="Address-of-account-holder"
                   className="input"
                   required
                />
              </div>
              <div className="coolinput">
                <label   className="text">
                  Phone number:
                </label>
                <input
                  type="text"
                  placeholder="9123-4567"
                  name="Phone-number"
                  className="input"
                  required
                />
              </div>
                <br/>
              <h3>Account Information</h3>
              <div className="coolinput">
                <label   className="text">
                  Bank name:
                </label>
                <input
                  type="text"
                  placeholder="Enter your full bank name"
                  name="Bank-name"
                  className="input"
                  required
                />
              </div>
              <div className="coolinput">
                <label  className="text">
                  Account number:
                </label>
                <input
                  type="text"
                  placeholder="Bank account number"
                  name="Account-number"
                   className="input"
                   required
                />
              </div>
              <div  className="coolinput">
                <label   className="text">
                  Bank address:
                </label>
                <input
                  type="text"
                  placeholder="Enter the bank address"
                  name="Bank-Address"
                   className="input"
                   required
                />
              </div>

             
                {/* <button className={`send-btn ${isLoading ? 'loading' : ''}`} onClick={handleClick}>
                Send
                {isSuccess && <div className="success-toast">Message sent successfully!</div>}

                </button> */}
                <div className="button-container">
      <button className={`send-btn ${isLoading ? 'loading' : ''}`} onClick={handleClick}  disabled={isLoading} >
        {isLoading ? (
          <div className="spinner center">
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
            <div className="spinner-blade"></div>
          </div>
        ) : (
          'Send'
        )}
      </button>
      <ToastContainer />
    </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

