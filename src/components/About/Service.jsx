import React from "react";
import "./ServiceStyles.css";
const Service = () => {
  return (
    <div className="Service-Section">
      <div className="Serivce-heading">
        <h1 className="service-title">
          Our <span>Services</span>
        </h1>

        <p>
        Seamless Buying and Selling of Cryptocurrencies
        </p>
      </div>

      <div className="Service-Section-Cards">
        <div className="headline">
          <small>SERVICES</small>
          <h1>Simplifying Crypto Transactions <br/>Empowering Businesses and Individuals to <br/> Embrace the Future of Payments</h1>
        </div>
        <div class="card-container">
  <div class="card">
  <div class="front-content">
    <p>WE SELL</p>
  </div>
  <div class="content">
    <p class="heading">WE SELL</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipii
      voluptas ten mollitia pariatur odit, ab
      
    </p>
  </div>
</div>
</div>
        <div class="card-container">
  <div class="card">
  <div class="front-content">
    <p>WE BUY</p>
  </div>
  <div class="content">
    <p class="heading">WE BUY</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipii
      voluptas ten mollitia pariatur odit, ab
    
    </p>
  </div>
</div>
</div>
      </div>
    </div>
  );
};

export default Service;
