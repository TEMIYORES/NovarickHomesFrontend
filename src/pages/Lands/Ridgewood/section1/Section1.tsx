import { Img87 } from "../../../../assets/images";
import "./section1.scss";
import RidgewoodSwiper from "../../../../components/RidgewoodSwiper/RidgewoodSwiper";
const Section1 = () => {
  return (
    <>
      <div className="ridgewood-section1">
        <div className="ridgewood-section1-container">
          <div className="ridgewood-section1-container-left">
            <div className="ridgewood-section1-container-top">
              <div className="ridgewood-section1-container-top-title1">
                Welcome to
              </div>
              <div className="ridgewood-section1-container-top-title2">
                Ridgewood Lagos Serenity and Prime Comfort
              </div>
              <div className="ridgewood-section1-container-top-title3">
                by
                <div className="ridgewood-section1-container-top-title3-logo">
                  <img src={Img87} alt="logo" />
                </div>
              </div>
            </div>

            <div className="ridgewood-section1-container-bottom">
              <button className="ridgewood-section1-container-bottom-button">
                0806 *** View Phone{" "}
              </button>
              <button className="ridgewood-section1-container-bottom-button">
                {" "}
                GET YOUR LAND NOW!{" "}
              </button>
            </div>
          </div>
          <div className="ridgewood-section1-container-right">
            <RidgewoodSwiper />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
