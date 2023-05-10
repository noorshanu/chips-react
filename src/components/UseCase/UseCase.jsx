import React from "react";
import "./Usecase.css";
import Image_1 from "../../assets/usecase/img-features-skinny-1.svg";
import Image_2 from "../../assets/usecase/img-features-skinny-2.svg";
import Image_3 from "../../assets/usecase/img-features-skinny-3.svg";
import Image_4 from "../../assets/usecase/img-features-skinny-4.svg";
import Image_5 from "../../assets/usecase/img-features-skinny-5.svg";
import Image_6 from "../../assets/usecase/img-features-skinny-6.svg";

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
          </div>

          <div className="usecase_box">
            <img src={Image_2} alt="" />
          </div>

          <div className="usecase_box">
            <img src={Image_3} alt="" />
          </div>
          <div className="usecase_box">
            <img src={Image_4} alt="" />
          </div>
          <div className="usecase_box">
            <img src={Image_5} alt="" />
          </div>
          <div className="usecase_box">
            <img src={Image_6} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCase;
