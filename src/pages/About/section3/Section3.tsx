import { Img81, Img82, Img84 } from "../../../assets/images";
import "./section3.scss";
import ebun from "./ebun.jpeg";
import frank from "./frank.jpeg";
import boma from "./boma.jpeg";
const Section3 = () => {
  const itemData = [
    { image: Img81, name: "Noah Ibrahim", title: "MANAGING DIRECTOR" },
    { image: Img82, name: "Eghiale Gift", title: "EXECUTIVE ASSISTANT" },
    { image: boma, name: "Violet Boma", title: "GENERAL MANAGER" },
    { image: ebun, name: "Ayodele Ebunoluwa", title: "HEAD, REALTORS" },
    { image: Img84, name: "Engr. Lateef Ibrahim", title: "DIRECTOR, PROJECTS" },
    { image: frank, name: "Frank", title: "HEAD, OPERATIONS" },
  ];
  return (
    <>
      <div className="about-section3">
        <div className="about-section3-container">
          <div className="about-section3-container-title">Management Team</div>
          <div className="about-section3-container-desc">
            Meet the talented team of Executives, Engineers, Marketers, Customer
            Service Reps that make Novarick Possible
          </div>
          <div className="about-section3-container-item-container">
            {itemData.map((item) => {
              return (
                <div className="about-section3-container-item">
                  <img src={item.image} alt={item.image} />
                  <div className="about-section3-container-item-name">
                    {item.name}
                  </div>
                  <div className="about-section3-container-item-title">
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
