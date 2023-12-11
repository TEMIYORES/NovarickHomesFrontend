import React from "react";
import "./section5.scss";
import shield from "./shield.png";
import review from "./review.png";
import trust from "./trust.png";
import project_management from "./project-management.png";
const itemData = [
  {
    img: shield,
    title: "TRUST",
    desc: "We reflect and demonstrate unwavering integrity, honesty, consistency and responsibility every step of the way.",
  },
  {
    img: project_management,
    title: "INNOVATION",
    desc: "We keep making improvements to deliver housing services with the most effective, sustainable,modern and up to date building and construction methods.",
  },
  {
    img: review,
    title: "CUSTOMER SATISFACTION",
    desc: "We take pride in providing exceptional customer service, through efficient services, high value and  quality products.",
  },
  {
    img: trust,
    title: "RESPECT FOR PEOPLE",
    desc: "To us respect for the individual means more than just smiling and being polite, it means that every person is of equal value.",
  },
];
const Section5 = () => {
  return (
    <div className="about-section5">
      <div className="about-section5-heading">Core Values</div>
      <div className="about-section5-container">
        {itemData.map((data) => {
          return (
            <div className="about-section5-container-item">
              <img src={data.img} alt="sheild" className="about-section5-container-image"/>
              <div className="about-section5-container-item-title">
                {data.title}
              </div>
              <div className="about-section5-container-item-desc">
                {data.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section5;
