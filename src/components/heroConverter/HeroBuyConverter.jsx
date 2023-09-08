import React, { useEffect,  useState } from "react";
import "../../components/login/BuyStyles.css";
import {
  fiatCurrencies,
  cryptoCurrencies,
} from "../../components/fiatCurrencyApi";
import { FaTimes } from "react-icons/fa";
import './TabStyles.css'
import { Link } from "react-router-dom";





const Buy = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isCryptoDropdownOpen, setIsCryptoDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("NGN");
  const [CrypselectedOption, setCryptSelectedOption] = useState("USDT");
  const [filteredCurrencies, setFilteredCurrencies] = useState(fiatCurrencies);
  const [Crypto, setFilteredCrypto] = useState(cryptoCurrencies);
  // const [selectedFiatOption, setSelectedFiatOption] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [CryptosearchText, setCryptoSearchText] = useState("");
  // const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedImg, setSelectedImg] = useState(cryptoCurrencies[0].flag);
  const [selectedFiatImg, setSelectedFiatImg] = useState(
    fiatCurrencies[0].flag
  );


  const handleChange = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);

    const filteredCurrencies = fiatCurrencies.filter((currency) =>
      currency.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredCurrencies(filteredCurrencies);
  };

  const handleChanges = (event) => {
    const searchValue = event.target.value;
    setCryptoSearchText(searchValue);

    const Crypto = cryptoCurrencies.filter((currency) =>
      currency.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredCrypto(Crypto);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleCryptoModal = () => {
    setIsCryptoDropdownOpen(!isCryptoDropdownOpen);
  };

  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("USDT");
  const [result, setResult] = useState("");
  const [oneUnitConversion, setOneUnitConversion] = useState("");
  const [error, setError] = useState("");


  const apiKey = import.meta.env.CRYPTOCOMPAREAPIKEY;

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
          const result = amount * rate; 
          setResult(result.toFixed(4));

          const oneUnitConversion = 1 / rate;
        setOneUnitConversion(oneUnitConversion.toLocaleString());
        }
      })
      .catch((error) => {
        setError("Error: Unable to fetch exchange rate.");
        console.error(error);
      });

    
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleCryptoDropdown = () => {
    setIsCryptoDropdownOpen(!isCryptoDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log("Selected currency code:", option);
    setToCurrency(option);
    setIsOpen(false);

    const selectedFiatImg = fiatCurrencies.find(
      (currency) => currency.code === option
    );

    if (selectedFiatImg) {
      setSelectedFiatImg(selectedFiatImg.flag);
    } else {
      setSelectedFiatImg("");
    }
  };

  const handleOptionSelects = (optionTexts) => {
    setCryptSelectedOption(optionTexts);
    setToCurrency(optionTexts);
    setIsCryptoDropdownOpen(false);

    const selectedCurrency = cryptoCurrencies.find(
      (currency) => currency.code === optionTexts
    );

    if (selectedCurrency) {
      setSelectedImg(selectedCurrency.flag);
    } else {
      setSelectedImg("");
    }
  };



 

  return (
    <div className="">
        
      <form >
        <div className="hero-converter">
          <h5 className="">You Pay</h5>
          <div className="buy-container-content">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="inp"
              name="Fiat-Amount"
              required
            />
            <div className="select-menu">
              <div className="select-btn" onClick={toggleDropdown}>
                {/* <span className="sBtn-text" name="Fiat">{selectedOption}</span> */}

                <input
                  value={selectedOption}
                  className="currency-inp"
                  name="Fiat-Flag"
                  readOnly
                  required
                />
                <img src={selectedFiatImg} className="crypImage" />
                <i
                  className={`bx ${
                    isOpen ? "bx-chevron-up" : "bx-chevron-down"
                  }`}
                ></i>
              </div>

              {isOpen && (
                <div className="Herooptions">
                  <div className="search-container">
                    <div class="hero-input-wrapper">
                      <small>Select Fiat currency</small>

                      <FaTimes
                        size={20}
                       className="timesIcon"
                        onClick={toggleModal}
                      />
                    </div>

                    <div className="search-cont">
                      <div class="search-box">
                        <input
                          class="search-txt"
                          type="text"
                          name=""
                          placeholder="Type to Search"
                          value={searchText}
                          onChange={handleChange}
                        />
                        <a class="search-btn" href="#">
                          <i class="fas fa-search"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul value={fromCurrency} onChange={handleFromCurrencyChange}>
                    <div className="hero-dropdown-container">
                      {filteredCurrencies.map((currency) => (
                        <li
                          key={currency.code}
                          value={currency.code}
                          className="option"
                          onClick={() => handleOptionSelect(currency.code)}
                        >
                          <div className="details">
                            <img src={currency.flag} />
                            <div>
                              <p className="option-text">{currency.name}</p>
                              <small>{currency.code}</small>
                            </div>
                          </div>
                        </li>
                      ))}
                      <br />
                    </div>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <h5 className="">You Get</h5>
          <div className="buy-container-content">
            <input
              type="text"
              value={result}
              className="inp"
              name="Exchange-Amount"
              readOnly // Add this attribute to make the input read-only
            />
            <div className="select-menu">
              <div className="select-btn" onClick={toggleCryptoDropdown}>
                {/* <span className="sBtn-text" >
                  {CrypselectedOption}
                </span> */}
                {/* <span className="sBtn-text" name="Fiat">{CrypselectedOption}</span> */}
                <input
                  value={CrypselectedOption}
                  className="currency-inp"
                  name="Crypto-Code"
                  readOnly
                />
                <img src={selectedImg} className="crypImage" />
                <i
                  className={`bx ${
                    isCryptoDropdownOpen ? "bx-chevron-up" : "bx-chevron-down"
                  }`}
                ></i>
              </div>

              {isCryptoDropdownOpen && (
                <div className="Herooptions">
                  <div className="search-cont">
                    <div class="search-box">
                      <input
                        class="search-txt"
                        type="text"
                        name=""
                        placeholder="Type to Search"
                        value={CryptosearchText}
                        onChange={handleChanges}
                      />
                      <a class="search-btn" href="#">
                        <i class="fas fa-search"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <div class="hero-input-wrapper">
                      <small>Select Crypto currency</small>

                      <FaTimes
                        size={20}
                        
                        onClick={toggleCryptoModal}
                        className="timesIcon"
                      />
                    </div>
                    <ul
                      // className="options"
                      value={toCurrency}
                      onChange={handleToCurrencyChange}
                    >
                      <div className="hero-dropdown-container">
                        {Crypto.map((currency) => (
                          <div className="">
                            <li
                              key={currency.code}
                              value={currency.code}
                              className="option"
                              onClick={() => handleOptionSelects(currency.code)}
                            >
                              <div className="details">
                                <img src={currency.flag} />
                                <div>
                                  <p className="option-text">{currency.name}</p>
                                  <small>{currency.code}</small>
                                </div>
                              </div>
                            </li>
                          </div>
                        ))}
                        <br />
                      </div>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
      <Link to= '/buyCrypto'>
      <div>
       <div className="btnn">   <button className="cta">
     <span className="spannn">Buy Now</span>
     <svg viewBox="0 0 13 10" height="10px" width="15px">
       <path d="M1,5 L11,5"></path>
       <polyline points="8 1 12 5 8 9"></polyline>
     </svg>
   </button>{" "}
 
 </div>
       </div>
      </Link>
{/* 
 <small>  <img src={selectedImg} className="crypImage" />1 {CrypselectedOption} = {oneUnitConversion} {selectedOption}    <img src={selectedFiatImg} className="crypImage" /></small> */}

        </div>
      </form>
    </div>
  );
};

export default Buy;
