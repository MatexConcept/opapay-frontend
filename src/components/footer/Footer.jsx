import "./FooterStyles.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="footer-container">
        <div className="left-left">
    <div>
    <h4>Company</h4>
    <div className="companyLinks">
          
         <Link to='./buyCrypto'>
         <div>Buy&Sell</div>
         </Link>
       <Link to='/about'>
       <div>About</div>
       </Link>
         <Link to='/contact'>
         <div>Contact</div>
         </Link>
          <Link to='/'>
          <div>Home</div>
          </Link>
           </div>
    </div>
        
        </div>
        <div className="right-right">
       <div>
       <h4>Our Company's Focus</h4>
          <p>
            At our company, we are at the forefront of revolutionizing the way
            people exchange cryptocurrency with fiat currency. Our innovative
            platform offers a seamless and secure experience for buying and
            selling a wide range of cryptocurrencies.
          </p>
       </div>
       <ul className="socials">
  <li><i class="fa-brands fa-facebook-f"></i></li>
  <li><i class="fa-brands fa-twitter"></i></li>
  <li><i class="fa-brands fa-instagram"></i></li>
  <li><i class="fa-brands fa-linkedin-in"></i></li>
  <li><i class="fa-brands fa-whatsapp"></i></li>
</ul>

        </div>
      </div>

      <div class="copyright">© 2023 – All Rights Reserved. </div>
    </footer>
  );
};

export default Footer;
