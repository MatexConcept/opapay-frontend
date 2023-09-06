import "./ThirdSectionStyles.css";
import binance from "../assets/partners/binance__1_-removebg-preview.png";
import cello from "../assets/partners/cello__1_-removebg-preview.png";
import bitfinex from "../assets/partners/bitfinex-logo__1_-removebg-preview.png";
import coinbase from "../assets/partners/binance__1_-removebg-preview.png";
import okx from "../assets/partners/OKX__new-removebg-preview.png";
import kraken from "../assets/partners/Kraken__1_-removebg-preview.png";
import pancake from "../assets/partners/pancake__1_-removebg-preview.png";
import quickswap from "../assets/partners/quickswap-logo__1_-removebg-preview.png";
import sushiswap from "../assets/partners/sushiswap-removebg-preview.png";
import uniswap from "../assets/partners/uniswap__1_-removebg-preview.png";

const ThirdSection = () => {
  return (
    <div className="third-section__container">
      <h1 className="third-section__title">
      Unleash limitless trades
      </h1>
      <h5 className="subtext">with our trusted liquidity from top exchanges</h5>
      <div className="third-section__partners">
        <div className="third-section__partners-one">
          <div className=" third-section__partner-section1">
            <img src={binance} alt="binance" />
            <img src={uniswap} alt="bitfinex" />
          </div>
          <div className=" third-section__partner-section2">
            <img src={sushiswap} alt="cello" />
            <img src={bitfinex} alt="binance" />
          </div>
          <div className=" third-section__partner-section3">
            <img src={kraken} alt="bitfinex" />
            <img src={pancake} alt="cello" />
          </div>
        </div>

        <div className="third-section__partners-one">
        <div className=" third-section__partner-section1">
            <img src={okx} alt="bitfinex" />
            <img src={pancake} alt="cello" />
          </div>

          <div className=" third-section__partner-section2">
            <img src={sushiswap} alt="cello" />
            <img src={bitfinex} alt="binance" />
          </div>

          <div className=" third-section__partner-section3">
            <img src={quickswap} alt="binance" />
            <img src={cello} alt="bitfinex" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
