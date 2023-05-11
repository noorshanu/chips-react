import React from "react";
import Logo from '../../assets/logo.png'
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row items-align-center">
          <div className="col-md-3">
            <div>
                <img src={Logo} alt="" />
                <div className="social-media-footer">
                    <a href="">twitter</a>
                    <a href="">twitter</a>
                    <a href="">twitter</a>
                    <a href="">twitter</a>

                </div>
            </div>
          </div>

          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
