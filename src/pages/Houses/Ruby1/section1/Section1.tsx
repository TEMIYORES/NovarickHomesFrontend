import React from "react";
import { Img87 } from "../../../../assets/images";
import "./section1.scss";
import SwiperComp from "../../../../components/Swiper/Swiper";
const Section1 = () => {
  return (
    <>
      <div className="ruby1-section1">
        <div className="ruby1-section1-container">
          <div className="ruby1-section1-container-left">
            <div className="ruby1-section1-container-top">
              <div className="ruby1-section1-container-top-title1">
                Welcome to
              </div>
              <div className="ruby1-section1-container-top-title2">
                Ruby 1 <br />A mixture of Luxury and Affordability
              </div>
              <div className="ruby1-section1-container-top-title3">
                by
                <div className="ruby1-section1-container-top-title3-logo">
                  <img src={Img87} alt="logo" />
                </div>
              </div>
            </div>

            <div className="ruby1-section1-container-bottom">
              <button className="ruby1-section1-container-bottom-button">
                0806 *** View Phone{" "}
              </button>
              <button className="ruby1-section1-container-bottom-button">
                {" "}
                RESERVE YOUR SPOT!{" "}
              </button>
            </div>
          </div>
          <div className="ruby1-section1-container-right">
            {/* <Ruby1Slider /> */}
            <SwiperComp name={"ruby2"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
