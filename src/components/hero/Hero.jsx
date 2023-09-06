import React, { useEffect, useState } from "react";
import flag from "../../assets/Payment Channel/kakopay.png";
import Tabs from "../../components/heroConverter/TabComponent";

import "./HeroStyles.css";

const cryptoCurrencies = [
  { code: "BTC", name: "Bitcoin" },
  { code: "ETH", name: "Ethereum" },
  { code: "USDT", name: "Tether" },

  // Add more crypto currency options here
];

const fiatCurrencies = [
  { code: "USD", name: "US Dollar", flag: "https://rb.gy/2sqy2" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "KES", name: "Kenyan Shilling" },
  // Add more fiat currency options here
];
const hero = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("USDT");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const apiKey =
    "e962352041026f181a769f76d0989625a674589266c6f2b97b9450499d9f12cc";

  useEffect(() => {
    handleConvert();
  }, [amount, fromCurrency, toCurrency]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleConvert = () => {
    setError("");
    const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=${toCurrency}&api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "Error") {
          setError("Unable to fetch exchange rate.");
        } else {
          const rate = data[toCurrency];
          const result = amount * rate; // Correct the conversion rate
          setResult(result.toFixed(4));
        }
      })
      .catch((error) => {
        setError("Error: Unable to fetch exchange rate.");
        console.error(error);
      });
  };

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
            cryptocurrencies.
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
