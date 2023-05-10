import "./Hero.css";
import {AiOutlineArrowRight} from 'react-icons/ai'
function Hero() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="hero-text">
          <h1>
            Asset management for a{" "}
            <span className="lightblue-color">DeFi world</span>
          </h1>

          <p>
            Bring your crypto strategies to life with Set’s leading portfolio
            management tools.
          </p>

          <div className="hero-txt-btn">
            <button>
            Explore Sets  &nbsp;&nbsp;&nbsp; 
          <AiOutlineArrowRight/>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
