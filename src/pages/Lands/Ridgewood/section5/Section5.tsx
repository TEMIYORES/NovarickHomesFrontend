import React from "react";
import "./section5.scss";
import RidgewoodSwiper from "../../../../components/RidgewoodSwiper/RidgewoodSwiper";
const ridgewood_brochure = "http://localhost:3000/files/ridgewood_brochure.pdf";

const DownloadFileAtUrl = (url) => {
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", "THE RIDGEWOOD LAGOS BROCHURE");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};
const Section5 = () => {
  return (
    <>
      <div className="ridgewood-section5">
        <div className="ridgewood-section5-container-heading">
          THE ONLY PIECE OF LAND YOU NEED IN EPE
        </div>
        <div className="ridgewood-section5-container-desc">
          The Ridgewood Lagos, a real estate development by Novarick Homes and
          Properties, is home to Nigeria’s first wellness resort and spa.
        </div>
        <div className="ridgewood-section5-container">
          <div className="ridgewood-section5-container-right">
            <div className="ridgewood-section5-container-right-heading">
              EXPERIENCE TRANQUIL LIVING
            </div>
            <ul>
              <li>
                <span>TOTAL PLOTS</span> <span>180</span>
              </li>
              <li>
                <span>600 SQM</span> <span>90</span>
              </li>
              <li>
                <span>300 SQM </span> <span>50</span>
              </li>
            </ul>
            <button
              className="ridgewood-section5-container-right-button"
              onClick={() => DownloadFileAtUrl(ridgewood_brochure)}
            >
              Download E-Brochure
            </button>
          </div>
          <div className="ridgewood-section5-container-left">
            <RidgewoodSwiper />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
