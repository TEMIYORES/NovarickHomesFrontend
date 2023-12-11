import "./section2.scss";
const Section2 = () => {
  return (
    <>
      <div className="about-section2">
        <div className="about-section2-container">
          <div className="about-section2-container-left">
            <div className="about-section2-container-left-title">
              Who We Are
            </div>
            <div className="about-section2-container-left-desc">
              We pride ourselves on the development of estates that run on clean
              and renewable energy supply, this we believe will help us make a
              considerable impact in making the world around us a better place.
              The company operates in subsidiaries in the following services;
              Property developments, Property Investment, Property procurement
              and advisory, Joint ventures, and facility management
            </div>
          </div>
          <div className="about-section2-container-right">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/hqjdwSGY0pw?autoplay=1&mute=1"
              title="About Us"
              style={{ borderRadius: "10px" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
