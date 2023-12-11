import "./section3.scss";

import creche from "./baby-girl.png";
import court from "./court.png";
import farm from "./field.png";
import hospital from "./hospital.png";
import playground from "./playground.png";
import shuttle from "./shuttle.png";
import supermarket from "./supermarket.png";
import gym from "./weightlifter.png";
import police from "./post.png";
import club from "./mirror-ball.png";
import carpark from "./signage.png";
import resort from "./resort.png";
import water from "./water.png";
import electricity from "./electric-meter.png";
import smartcity from "./smart-city.png";
import security from "./shield.png";

const itemData = [
  {
    icon: security,
    title: "24/7 Security",
  },
  {
    icon: electricity,
    title: "Stable electricity",
  },
  {
    icon: water,
    title: "Clean water",
  },
  {
    icon: smartcity,
    title: "smart community",
  },
  {
    icon: supermarket,
    title: "Estate supermarket",
  },
  {
    icon: hospital,
    title: "Estate Clinic",
  },
  {
    icon: police,
    title: "Security post",
  },
  {
    icon: resort,
    title: "Alafia resort and spa",
  },
  {
    icon: carpark,
    title: "General car park",
  },
  {
    icon: court,
    title: "Tennis Court",
  },
  {
    icon: playground,
    title: "garden and playground",
  },
  {
    icon: farm,
    title: "Estate farm",
  },
  {
    icon: shuttle,
    title: "Estate Shuttle",
  },
  {
    icon: creche,
    title: "Estate Creche",
  },
  {
    icon: gym,
    title: "Estate gym",
  },
  {
    icon: club,
    title: "Estate Club",
  },
];
const Section3 = () => {
  return (
    <>
      <div className="ridgewood-section3">
        <div className="ridgewood-section3-container">
          <div className="ridgewood-section3-container-top">
            <div className="ridgewood-section3-container-top-title1">
              Estate Amenities and Facilities
            </div>
            <div className="ridgewood-section3-container-top-title2">
              Ridgewood Lagos embodies living in bliss and comfort
            </div>
          </div>
          <div className="ridgewood-section3-container-bottom">
            {itemData.map((item) => {
              return (
                <div
                  key={item.title}
                  className="ridgewood-section3-container-bottom-item"
                >
                  <img
                    src={item.icon}
                    alt="icons"
                    className="ridgewood-section3-container-bottom-item-icon"
                  />
                  <div className="ridgewood-section3-container-bottom-item-desc">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
