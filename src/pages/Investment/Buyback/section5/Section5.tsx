import React from "react";

import Ruby3Slider from "../../../components/ruby3Slider/ruby3Slider";
import "./section5.scss";
const buybackbrochure = "http://localhost:3000/files/buyback_brochure.pdf";

const DownloadFileAtUrl = (url) => {
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", "RUBY 3 BROCHURE");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};
const Section5 = () => {
  return (
    <>
      <div className="buyback-section5">
        <div className="buyback-section5-container-heading">
          02 Bedroom Semi-Detached Duplex +BQ
        </div>
        <div className="buyback-section5-container-desc">
          This 2 bedroom apartment is architecturally designed to contain the
          following
        </div>
        <div className="buyback-section5-container">
          <div className="buyback-section5-container-right">
            <div className="buyback-section5-container-right-heading">
              Sophisticated and Spacious
            </div>
            <ul>
              <li>
                <span>BEDROOM</span> <span>2</span>
              </li>
              <li>
                <span>PARKING</span> <span>1</span>
              </li>
              <li>
                <span>BATH</span> <span>2</span>
              </li>
              <li>
                <span>BALCONY</span> <span>YES</span>
              </li>
            </ul>
            <button
              className="buyback-section5-container-right-button"
              onClick={() => DownloadFileAtUrl(buybackbrochure)}
            >
              Download E-Brochure
            </button>
          </div>
          <div className="buyback-section5-container-left">
            <buybackSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
