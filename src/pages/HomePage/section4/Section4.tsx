import "./section4.scss";

import sec4 from "./section4_image.png";
const Section4 = () => {
  return (
    <>
      <div className="home-section4">
        <div className="home-section4-container">
          <div className="home-section4-container-left">
            <div className="home-section4-container-left-top">
              <img src={sec4} alt="construction-workers" />
            </div>
          </div>
          <div className="home-section4-container-right">
            <div className="home-section4-container-right-container">
              <div
                className="home-section4-container-right-top"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                Ready to start your home journey? 🚀
              </div>
              <div
                className="home-section4-container-right-middle"
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                Let's Build your next home together🏠
              </div>

              <button className="home-section4-container-right-bottom-button">
                Start your home journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
