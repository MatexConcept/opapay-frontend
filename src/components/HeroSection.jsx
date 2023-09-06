import crypto from "../assets/crypto 2.png";

import "./HeroSection2Styles.css";

const heroSection2 = () => {
  return (
  
     <div className="section">
   
   <h1 className="intro">Introducing Our Vibrant Fiat-to-Crypto Exchange</h1>
  
   <div className="container">
     <div>
       <img src={crypto} alt="coin" className="img" />
       
     </div>

     <div>
       <div className="text">
         <h2>
           Unlock the power of converting cryptocurrencies to fiat currencies
           effortlessly. Our exchange provides a simple and secure way to
           convert your digital assets into local African currencies,
           enabling you to seamlessly integrate your crypto holdings with the
           traditional financial system. Experience the freedom and
           flexibility to use your cryptocurrencies for everyday transactions
           and tap into the immense potential of digital finance.
         </h2>
       </div>
     </div>
   </div>
 </div>
   
  );
};

export default heroSection2;
