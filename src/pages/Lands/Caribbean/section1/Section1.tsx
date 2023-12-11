import { Img87 } from "../../../../assets/images";
import "./section1.scss";

import thesaurus from "./Thesaurus.png";
import Caribbeanswiper from "../../../../components/CaribbeanSwiper/CaribbeanSwiper";
const Section1 = () => {
  return (
    <>
      <div className="caribbean-section1">
        <div className="caribbean-section1-container flex flex-col lg:flex-row lg:mt-20">
          <div className="caribbean-section1-container-left">
            <div className="caribbean-section1-container-top">
              <div className="caribbean-section1-container-top-title1">
                Welcome to
              </div>
              <div className="caribbean-section1-container-top-title2">
                Caribbean Lagos
                <br />A leap away from the ordinary
              </div>
              <div className="caribbean-section1-container-top-title3">
                by
                <div className="caribbean-section1-container-top-title3-logo">
                  <img src={Img87} alt="logo" />
                </div>
                <span style={{ color: "green", marginRight: 10 }}>&</span>
                <div className="caribbean-section1-container-top-title3-logo">
                  <img
                    src={thesaurus}
                    alt="logo"
                    style={{ objectFit: "fill" }}
                  />
                </div>
              </div>
            </div>

            <div className="caribbean-section1-container-bottom">
              <button className="caribbean-section1-container-bottom-button">
                0806 *** View Phone{" "}
              </button>
              <button className="caribbean-section1-container-bottom-button">
                {" "}
                GET YOUR LAND NOW!{" "}
              </button>
            </div>
          </div>
          <div className="caribbean-section1-container-right">
            <Caribbeanswiper />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
