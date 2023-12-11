import { Img87 } from "../../../../assets/images";
import "./section1.scss";
import SwiperComp from "../../../../components/Swiper/Swiper";
const Section1 = () => {
  return (
    <>
      <div className="co_ownership-section1">
        <div className="co_ownership-section1-container">
          <div className="co_ownership-section1-container-left">
            <div className="co_ownership-section1-container-top">
              <div className="co_ownership-section1-container-top-title1">
                Welcome to
              </div>
              <div className="co_ownership-section1-container-top-title2">
                Ruby3 Co-Ownership
              </div>
              <div className="co_ownership-section1-container-top-title3">
                by
                <div className="co_ownership-section1-container-top-title3-logo">
                  <img src={Img87} alt="logo" />
                </div>
              </div>
            </div>

            <div className="co_ownership-section1-container-bottom">
              <button className="co_ownership-section1-container-bottom-button">
                CALL +234 810 514 0514
              </button>
              <button className="co_ownership-section1-container-bottom-button">
                GET A PLAN
              </button>
            </div>
          </div>
          <div className="co_ownership-section1-container-right">
            <SwiperComp name={"co_ownership"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
