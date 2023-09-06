import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../components/login/BuyStyles.css";
import {
  fiatCurrencies,
  cryptoCurrencies,
} from "../../components/fiatCurrencyApi";
import { FaTimes } from "react-icons/fa";

import pay from "../../assets/powered_by-removebg-preview.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import useRedirectLogoutUser from '../../customHook/useRedirectLogoutUser'


const Buy = () => {
  useRedirectLogoutUser("/login")
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
 const navigate = useNavigate("")
  const form = useRef();
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y06sijj",
        "template_1trqn5w",
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

  };

 

  const onToken = (token) => {
    console.log(token)

    const paymentSuccessful = true; 

    if (paymentSuccessful) {
      toast.success("Transaction successful!");
      // Navigate to success page
      navigate('/BuySuccess');
    } else {
      toast.error("Transaction failed!");
    
    }
  };
  return (
    <div className="buy-container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="buy-container-parent">
          <h3 className="buy-container-h1">Buy Crypto</h3>
          <h5 className="buy-container-h5">You Pay</h5>
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
                <div className="options">
                  <div className="search-container">
                    <div class="input-wrapper">
                      <small>Select Fiat currency</small>

                      <FaTimes
                        size={20}
                        style={{ color: "black" }}
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
                    <div className="dropdown-container">
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
          <h5 className="buy-container-h5">You Get</h5>
          <div className="buy-container-content">
            <input
              type="text"
              value={result}
              className="inp"
              name="Exchange-Amount"
              readOnly 
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
                <div className="options">
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
                    <div class="input-wrapper">
                      <small>Select Crypto currency</small>

                      <FaTimes
                        size={20}
                        style={{ color: "black" }}
                        onClick={toggleCryptoModal}
                        className="faIcon"
                      />
                    </div>
                    <ul
                      // className="options"
                      value={toCurrency}
                      onChange={handleToCurrencyChange}
                    >
                      <div className="dropdown-container">
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
              {/* 
              <select value={toCurrency} onChange={handleToCurrencyChange}>
                {cryptoCurrencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.name} ({currency.code})
                  </option>
                ))}
              </select> */}
            </div>
          </div>
          <div class="contre">
            <input type="text" required="required" name="Wallet-Add" />
            <label> enter {CrypselectedOption} wallet addres</label>
            <i></i>
          </div>
          <br />
          {/* <button  className="procedBtn" value="Send" >
            <svg
              viewBox="0 0 16 16"
              class="bi bi-coin"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"></path>
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
            </svg>
            <Link to='/buyCryptoPayment'>
          <p>  Proceed to Buy</p>
            </Link>
          </button> */}

          <StripeCheckout
            className="procedBtn"
            token={onToken}
            currency={selectedOption}
            amount={amount * 100}
            stripeKey= "pk_test_51NeI9pJCVIw6VJFGTVsVNk4Ko5t0Tj7KAf6bq6Lgb0BUWwR3hgkDFOvDJEkysK12URiOUZNHbHp3flyT9YR3Qgzl00dRD0AsjW"
            disabled={amount.trim() === ""}

          />

          <ToastContainer />
          <img src={pay} className="pay" />
        </div>
      </form>
    </div>
  );
};

export default Buy;
