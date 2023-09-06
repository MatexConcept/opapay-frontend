

import React, { useEffect, useRef } from 'react'
import './ContactStyles.css'
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";




const ContactForm = () => {
  const form = useRef();

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    const focusFunc = (event) => {
      let parent = event.target.parentNode;
      parent.classList.add("focus");
    };

    const blurFunc = (event) => {
      let parent = event.target.parentNode;
      if (event.target.value === "") {
        parent.classList.remove("focus");
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y06sijj",
        "template_wgts9z6",
        form.current,
        "Lq_IvY_865-maaO7u"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    
      toast.success('message sent  successfull!');


  };

  const handleClick = (e) => {
    e.preventDefault();

    const formElement = e.target.closest('form');

    if (formElement) {
      const inputs = formElement.querySelectorAll('input[required]');
      const isFormEmpty = Array.from(inputs).some((input) => !input.value.trim());

      if (!isFormEmpty) {
        
        sendEmail(e);
      } else {
        toast.error("Input fields cannot be empty.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <div className="container">
    <span className="big-circle"></span>
    <img src="img/shape.png" className="square" alt="" />
    <div className="form">
      <div className="contact-info">
        <h3 className="title">Let's get in touch</h3>
        <p className="text">
        We value open communication and are eager to connect with you. Whether you have a question, need assistance, or simply want to share your thoughts, we're here to listen. Reach out to us using any of the methods below, and we'll respond as soon as possible.
        </p>

        <div className="info">
          <div className="information">
            <img src="img/location.png" className="icon" alt="" />
            <p>92 Cherry Drive Uniondale, NY 11553</p>
          </div>
          <div className="information">
            <img src="img/email.png" className="icon" alt="" />
            <p>lorem@ipsum.com</p>
          </div>
          <div className="information">
            <img src="img/phone.png" className="icon" alt="" />
            <p>123-456-789</p>
          </div>
        </div>

        <div className="social-media">
          <p>Connect with us :</p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <span className="circle one"></span>
        <span className="circle two"></span>

        <form  autoComplete="off" className='contact-Forms' ref={form} onSubmit={sendEmail}>
          <h3 className="title">Contact us</h3>
          <div className="input-container">
            <input type="text" name="to_name" className="input" required />
            <label htmlFor="">Username</label>
            <span>Username</span>
          </div>
          <div className="input-container">
            <input type="email" name="to_email" className="input" required />
            <label htmlFor="">Email</label>
            <span>Email</span>
          </div>
          <div className="input-container">
            <input type="tel" name="to_email" className="input" required />
            <label htmlFor="">Phone</label>
            <span>Phone</span>
          </div>
          <div className="input-container textarea">
            <textarea name="message" className="input" required></textarea>
            <label htmlFor="">Message</label>
            <span>Message</span>
          </div>
          <input type="submit" value="Send" className="btn" onClick={handleClick} />
        </form>
        <ToastContainer/>
      </div>
    </div>
  </div>
  );
};

export default ContactForm;
