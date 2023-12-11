import { Img87 } from "../../../../assets/images";
import "./section1.scss";
import SwiperComp from "../../../../components/Swiper/Swiper";
const Section1 = () => {
  return (
    <>
      <div className="buyback-section1">
        <div className="buyback-section1-container">
          <div className="buyback-section1-container-left">
            <div className="buyback-section1-container-top">
              <div className="buyback-section1-container-top-title1">
                Welcome to
              </div>
              <div className="buyback-section1-container-top-title2">
                Ruby3 Buy-Back Promo
              </div>
              <div className="buyback-section1-container-top-title3">
                by
                <div className="buyback-section1-container-top-title3-logo">
                  <img src={Img87} alt="logo" />
                </div>
              </div>
            </div>

            <div className="buyback-section1-container-bottom">
              <button className="buyback-section1-container-bottom-button">
                0806 *** View Phone{" "}
              </button>
              <button className="buyback-section1-container-bottom-button">
                GET A PLAN
              </button>
            </div>
          </div>
          <div className="buyback-section1-container-right">
            <SwiperComp name={"buyback"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
