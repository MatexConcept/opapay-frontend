import React from "react";
// import "./Loader.scss";
import ReactDOM from "react-dom";
import loaderImg from "../../assets/tenor-1--unscreen.gif";
import './loaderStyle.css'

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
  
};

export const Spinner = () => {
  return (
    // <div className="--center-all">
    // <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    // </div>

<div className="dot-spinner">
<div class="dot-spinner">
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
</div>
</div>

  );
};

export default Loader;
