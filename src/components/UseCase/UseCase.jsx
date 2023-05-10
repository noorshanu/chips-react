import React from "react";
import "./Usecase.css";
import Image_1 from "../../assets/usecase/img-features-skinny-1.svg";
import Image_2 from "../../assets/usecase/img-features-skinny-2.svg";
import Image_3 from "../../assets/usecase/img-features-skinny-3.svg";
import Image_4 from "../../assets/usecase/img-features-skinny-4.svg";
import Image_5 from "../../assets/usecase/img-features-skinny-5.svg";
import Image_6 from "../../assets/usecase/img-features-skinny-6.svg";
import invest_1 from '../../assets/invester/image-1.svg'
import invest_2 from '../../assets/invester/image-3.svg'
import invest_3 from '../../assets/invester/image-4.svg'
import invest_4 from '../../assets/invester/new_order_logo-1-1.svg'
import invest_5 from '../../assets/invester/outlierventureslogo-dark.svg'

function UseCase() {
  return (
    <section className="usecase">
      <div className="container">
        <div className="text-center usecase-head">
          <h1>Use Cases</h1>
        </div>

        <div className="useCase-grid">
          <div className="usecase_box">
            <img src={Image_1} alt="" />
            <h2>Payment</h2>
          </div>

          <div className="usecase_box">
            <img src={Image_2} alt="" />
            <h2>Lending/ Borrowing</h2>
          </div>

          <div className="usecase_box">
            <img src={Image_3} alt="" />
            <h2>Games & NFT markets</h2>
          </div>
          <div className="usecase_box">
            <img src={Image_4} alt="" />
            <h2>Universal wallets</h2>
          </div>
          <div className="usecase_box">
            <img src={Image_5} alt="" />
            <h2>Bridges</h2>
          </div>
          <div className="usecase_box">
            <img src={Image_6} alt="" />
            <h2>DEX</h2>
          </div>
        </div>
        
      </div>

      <div className="invest-head usecase-head text-center">
             <h1>Investors</h1>

        </div>
      <div className="Investors">
      
        <div className="Investors-grid">
            <img src={invest_1} alt="" />
            <img src={invest_2} alt="" />
            <img src={invest_3} alt="" />
            <img src={invest_4} alt="" />
            <img src={invest_5} alt="" />

        </div>

      </div>
    </section>
  );
}

export default UseCase;
