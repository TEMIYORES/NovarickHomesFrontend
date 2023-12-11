import React from "react";
import "./section4.scss";
import vision from "./visionary.png";
import leadership from "./leadership.png";
import motivation from "./motivated.png";
const itemData = [
  {
    img: vision,
    title: "Our Vision",
    desc: "The vision of Novarick Homes & Properties Limited is to become the most successful real estate development firm in Africa, by building a Green and Clean environment for people to live in. A company with unsurpassed customer service with innovative and feasible investment opportunities.",
  },
  {
    img: leadership,
    title: "Our Mission",
    desc: "Our mission is to provide our customers with exemplary service through the development of green and affordable homes, with good infrastructure and access to unparalleled investment opportunities that will guarantee maximized real estate asset value.",
  },
  {
    img: motivation,
    title: "Our Drive",
    desc: "Real Estate is a tested and trusted means of wealth creation, and that's why at Novarick Homes, we are building a platform to harness the opportunities in the Nigerian Real Estate sector by focusing on developing sustainable and Eco-friendly communities, and also giving the average Nigerian access to affordable Real Estate investments.",
  },
];
const Section4 = () => {
  return (
    <div className="about-section4">
      <div className="about-section4-container">
        {itemData.map((data) => {
          return (
            <div className="about-section4-container-item">
              <img
                src={data.img}
                alt="core-values"
                className="about-section4-container-item-image"
              />
              <div className="about-section4-container-item-title">
                {data.title}
              </div>
              <div className="about-section4-container-item-desc">
                {data.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
