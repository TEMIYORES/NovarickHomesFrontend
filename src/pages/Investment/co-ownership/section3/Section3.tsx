import "./section3.scss";
import { Link } from "react-router-dom";
import location from "./location.png";
import key from "./key.png";
const itemData = [
  {
    icon: location,
    title: "Prime Location",
    desc: "The Ruby 3 apartment is a private-solar powered estate located in Ologolo, Lekki, Lagos State. A location with proximity to green spaces and less air pollution.",
  },
  {
    icon: key,
    title: "Luxury Apartment",
    desc: "Ruby 3 is a collection of 2 bedroom apartments with a wonderful blend of smart and friendly finishing, smart metering, a quiet environment, 24 hours security and other eco friendly facilities.",
  },
  {
    icon: location,
    title: "Serene Environment",
    desc: "The serene environment gives a comfortable relaxation spot perfect for any young professional working within the Lagos Island business districts",
  },
];
const Section3 = () => {
  return (
    <>
      <div className="co_ownership-section3">
        <div className="co_ownership-section3-container">
          <div className="co_ownership-section3-container-top">
            <div className="co_ownership-section3-container-top-title1">
              About Ruby3 Project
            </div>
            <div className="co_ownership-section3-container-top-title2">
              Ruby II embodies living in bliss and comfort
            </div>
          </div>
          <div className="co_ownership-section3-container-bottom">
            {itemData.map((data) => {
              return (
                <div className="about-section3-container-item">
                  <img
                    src={data.icon}
                    alt="core-values"
                    className="about-section3-container-item-image"
                  />
                  <div className="about-section3-container-item-title">
                    {data.title}
                  </div>
                  <div className="about-section3-container-item-desc">
                    {data.desc}
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/ruby3" className="about-section3-readmore">
            Read more...
          </Link>
        </div>
      </div>
    </>
  );
};

export default Section3;
