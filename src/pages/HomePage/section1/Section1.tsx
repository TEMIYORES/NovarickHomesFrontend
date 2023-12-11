import { Check } from "@mui/icons-material";

import "./section1.scss";
import homeImage from "./home_image.png";

let iconsColor = { color: "#ebb069" };
const Section1 = () => {
  return (
    <>
      <div className="home-section1 max-sm:mt-20">
        <div className="home-section1-container">
          <div className="home-section1-container-left">
            <div className="home-section1-container-top">
              <h1
                className="home-section1-container-top-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                The Future is Green🌲 and affordable🌟
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                Novarick Homes & Properties Limited is a real estate development
                company committed
              </p>
            </div>

            <button className="home-section1-container-middle-button">
              Start your home journey
            </button>
            <div className="home-section1-container-bottom">
              <div
                className="home-section1-container-bottom-left"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="1500"
              >
                <Check fontSize="small" style={iconsColor} />
                <span>Transparency on pricing</span>
              </div>
              <div
                className="home-section1-container-bottom-left"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="1700"
              >
                <Check fontSize="small" style={iconsColor} />
                <span>We build with Integrity</span>
              </div>
              <div
                className="home-section1-container-bottom-left"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="1800"
              >
                <Check fontSize="small" style={iconsColor} />
                <span>Money-back Guarantee</span>
              </div>
            </div>
          </div>
          <div className="home-section1-container-right">
            <img src={homeImage} alt="home-banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
