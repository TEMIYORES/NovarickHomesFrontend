import React from "react";
import "./section5.scss";
import Caribbeanswiper from "../../../../components/CaribbeanSwiper/CaribbeanSwiper";
const caribbeanbrochure = "http://localhost:3000/files/caribbean_brochure.pdf";

const DownloadFileAtUrl = (url) => {
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", "CARRIEBEAN LAKE CITY BROCHURE");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};
const Section5 = () => {
  return (
    <>
      <div className="caribbean-section5">
        <div className="caribbean-section5-container-heading">
          life is better on the water
        </div>
        <div className="caribbean-section5-container-desc">
          Caribbean Lake City’s highly attractive landscape has a central
          location with access to both intra-city roads and the Lagos Waterways.
        </div>
        <div className="caribbean-section5-container">
          <div className="caribbean-section5-container-right">
            <div className="caribbean-section5-container-right-heading">
              EXPERIENCE TRANQUIL LIVING
            </div>
            <ul>
              <li>
                <span style={{ fontWeight: 600, fontSize: 25 }}>TITLE</span>
                <span style={{ fontWeight: 600, fontSize: 25 }}>PLOTS</span>
              </li>

              <li>
                <span>Standard</span> <span>75</span>
              </li>
              <li>
                <span>Lakeview</span> <span>15</span>
              </li>
              <li>
                <span>Lagoon View</span> <span>15</span>
              </li>
              <li>
                <span>TOTAL PLOTS</span> <span>180</span>
              </li>
            </ul>
            <button
              className="caribbean-section5-container-right-button"
              onClick={() => DownloadFileAtUrl(caribbeanbrochure)}
            >
              Download E-Brochure
            </button>
          </div>
          <div className="caribbean-section5-container-left">
            <Caribbeanswiper />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
