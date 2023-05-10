import React from "react";
import Onboard_img from '../assets/xtnn.svg'

function Onboard() {
  return (
    <section className="onboard">
      <div className="container">
        <div className="onboard-head">
          <h1>Onboard capital in seconds</h1>

          <p>
            Set sources liquidity from exchanges and issues your tokenized fund
            to users for easy onboarding.
          </p>
        </div>
      </div>
     <div className="text-center">
        <img src={Onboard_img} alt=""/>
     </div>
    </section>
  );
}

export default Onboard;
