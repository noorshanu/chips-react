import React from "react";
import Logo from '../../assets/logo.png'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row items-align-center">
          <div className="col-md-3">
            <div className="logo-foot">
                <img src={Logo} alt="" />
                <div className="social-media-footer">
                    <a href="">twitter</a>
                    <a href="">twitter</a>
                    <a href="">twitter</a>
                    <a href="">twitter</a>

                </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="foot-links">
                <h2>Usefull Links</h2>

                <a href="/"> About </a>
                <a href="/"> Team </a>
                <a href="/"> Contact us </a>
                <a href="/"> Blog </a>
                <a href="/"> Terms and Conditions </a>
                <a href="/"> Privacy Policy </a>
            </div>
          </div>
          <div className="col-md-3">
          <div className="foot-links">
                <h2>Usefull Links</h2>

                <a href="/"> About </a>
                <a href="/"> Team </a>
                <a href="/"> Contact us </a>
                <a href="/"> Blog </a>
                <a href="/"> Terms and Conditions </a>
                <a href="/"> Privacy Policy </a>
            </div>
          </div>
          <div className="col-md-3">
          <div className="foot-links">
                <h2>Usefull Links</h2>

                <a href="/"> About </a>
                <a href="/"> Team </a>
                <a href="/"> Contact us </a>
                <a href="/"> Blog </a>
                <a href="/"> Terms and Conditions </a>
                <a href="/"> Privacy Policy </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
