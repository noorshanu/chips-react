
import Image_1 from "../assets/powerful-integrations.svg";
function TradeYield() {
  return (
    <section className="trade">
      <div className="container">
        <div className="row item-algin-center justify-content-center">
          <div className="col-md-6">
            <div className="trade-text-box">

            <h3>Trading & Yield Generation</h3>
            <h1>Powerful DeFi integrations</h1>
            <p>
              Manage your Sets with advanced trading tools that support DeFi
              services like AAVE and Compound.
            </p>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img src={Image_1} alt=""  className="im-1"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TradeYield;
