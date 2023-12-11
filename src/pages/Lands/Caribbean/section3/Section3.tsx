import React from "react";
import court from "./court.png";
import electricity from "./electric-meter.png";
import club from "./mirror-ball.png";
import playground from "./playground.png";
import police from "./post.png";
import "./section3.scss";
import security from "./shield.png";
import shuttle from "./shuttle.png";
import smartcity from "./smart-city.png";
import supermarket from "./supermarket.png";
import water from "./water.png";
import gym from "./weightlifter.png";
import jetty from "./jetty.png";
import basketball from "./basketball.png";

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
    icon: police,
    title: "Security post",
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
    icon: jetty,
    title: "Estate Jetty",
  },

  {
    icon: basketball,
    title: "Estate Basketball",
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
      <div className="caribbean-section3">
        <div className="caribbean-section3-container">
          <div className="caribbean-section3-container-top">
            <div className="caribbean-section3-container-top-title1">
              Estate Amenities and Facilities
            </div>
            <div className="caribbean-section3-container-top-title2">
              Caribbean Lagos embodies living in bliss and comfort
            </div>
          </div>
          <div className="caribbean-section3-container-bottom">
            {itemData.map((item) => {
              return (
                <div
                  key={item.title}
                  className="caribbean-section3-container-bottom-item"
                >
                  <img
                    src={item.icon}
                    alt="icons"
                    className="caribbean-section3-container-bottom-item-icon"
                  />
                  <div className="caribbean-section3-container-bottom-item-desc">
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
