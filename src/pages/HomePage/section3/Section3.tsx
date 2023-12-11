import { Img17, Img19, Img20 } from "../../../assets/images";
import "./section3.scss";
const Section3 = () => {
  return (
    <>
      <div className="home-section3">
        <div
          className="home-section3-top"
          data-aos="zoom-in-top"
          data-aos-duration="800"
          data-aos-delay="1000"
        >
          <span className="home-section3-top-title">
            Our Partners and Affiliates
          </span>

        </div>
        <div className="home-section3-bottom">
          <div
            className="home-section3-bottom-brands"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <img src={Img20} alt="brand" />
            <h2>THESAURUS</h2>
            <img src={Img19} alt="brand" />
            <img src={Img17} alt="brand" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
