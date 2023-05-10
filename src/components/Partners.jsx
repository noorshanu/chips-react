import React from "react";
import Logo_1 from "../assets/partners/bankless-logo.png";
import Logo_2 from "../assets/partners/bytetree-logo.png";
import Logo_3 from "../assets/partners/coinshares-logo.png";
import Logo_4 from "../assets/partners/defi-pulse-logo.svg";
import Logo_5 from "../assets/partners/ember-fund-logo.png";
import Logo_6 from "../assets/partners/index-logo.svg";
import Logo_7 from "../assets/partners/moonquant-capital-logo.png";
import Logo_8 from "../assets/partners/sw-capital-logo.png";
// import Logo_9 from "../assets/partners/yam-logo.png";


function Partners() {
  return (
    <section className="partners">
      <div className="conatiner m-auto text-center ">
        <div className="partner-header">
          <p>Trusted by</p>
        </div>
        <div className="partner-logos">
          <img src={Logo_1} alt="" />
          <img src={Logo_2} alt="" />
          <img src={Logo_3} alt="" />
          <img src={Logo_4} alt="" />
          <img src={Logo_5} alt="" />
          <img src={Logo_6} alt="" />
          <img src={Logo_7} alt="" />
          <img src={Logo_8} alt="" />
          {/* <img src={Logo_9} alt="" /> */}

        </div>
      </div>
    </section>
  );
}

export default Partners;
