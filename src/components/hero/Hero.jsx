import React, { useEffect, useState } from "react";
import flag from "../../assets/Payment Channel/kakopay.png";
import Tabs from "../../components/heroConverter/TabComponent";

import "./HeroStyles.css";


  // Add more fiat currency options here

const hero = () => {
 

  return (
    <div className="heroSection">
      <div class="air air1"></div>
      <div class="air air2"></div>
      <div class="air air3"></div>
      <div class="air air4"></div>

      <div className="cont">
        <div className="heroText">
          <h1>
            Forging connections between the global economies of fiat and
            Stablecoins
          </h1>
        </div>

        <Tabs/>
      </div>
    </div>
  );
};



// <div className="converter">
// <div className="convert">
//   <p>You Pay</p>
//   <div className="results">
//     <input
//       type="number"
//       value={amount}
//       onChange={handleAmountChange}
//       className="convertCrypto"
//     />
//     <select value={fromCurrency} onChange={handleFromCurrencyChange}>
//       {fiatCurrencies.map((currency) => (
//         <option key={currency.code} value={currency.code}>
//           {currency.name} ({currency.code}){" "}
//           <img src={currency.flag} />
//         </option>
//       ))}
//     </select>
//   </div>
// </div>

// <div className="result">
//   <p>You Get</p>
//   <div className="results">
//     <small>{result}</small>
//     <select value={toCurrency} onChange={handleToCurrencyChange}>
//       {cryptoCurrencies.map((currency) => (
//         <option key={currency.code} value={currency.code}>
//           {currency.name} ({currency.code})
//         </option>
//       ))}
//     </select>
//   </div>
// </div>
// <div className="btnn">
//   <button className="cta">
//     <span className="spannn">Buy Now</span>
//     <svg viewBox="0 0 13 10" height="10px" width="15px">
//       <path d="M1,5 L11,5"></path>
//       <polyline points="8 1 12 5 8 9"></polyline>
//     </svg>
//   </button>{" "}
 
// </div>
// </div>

export default hero;
