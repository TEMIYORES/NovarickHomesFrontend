import React from "react";
import "./section2.scss";
import VerifiedIcon from "@mui/icons-material/Verified";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import MapIcon from "@mui/icons-material/Map";
const Section2 = () => {
  return (
    <>
      <div className="caribbean-section2">
        <div className="caribbean-section2-right">
          <div className="caribbean-section2-right-title">Life on the Lake</div>
          <div className="caribbean-section2-right-desc">
            A leap away from the ordinary. The Caribbean Lakecity Estate is a
            smart community that offers facilities and amenities that relishes
            tranquility and helps you be in touch with nature with special
            provisions for lakeview, water transportation and relaxation.
            <span>
              The Caribbean Lake City is located at Sangotedo, just directly
              opposite the Shoprite Mall. It’s about 2 minutes drive from the
              expressway and is designed to take advantage of the waterways,
              thereby providing a sense of luxury and accessibility for its
              residents.
            </span>
            <span>
              Caribbean Lake City’s highly attractive landscape has a central
              location with access to both intra-city roads and the Lagos
              Waterways. With partnership with the Lagos State Waterways
              Authority (LASWA), residents can commute to popular destinations
              within minutes.
            </span>
            <ul>
              <li>
                <VerifiedIcon color="success" />
                <span>C of O Land Title</span>
              </li>
              <li>
                <DirectionsBoatIcon color="success" />
                <span>Water Transportation</span>
              </li>
              <li>
                <MapIcon color="success" />
                <span>Superb Location</span>
              </li>
            </ul>
          </div>
          <button className="caribbean-section2-right-button">
            get your land now
          </button>
        </div>
        <div className="caribbean-section2-left">
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/zZRkIGKgLiM"
            title="Novarick Ridge Lagos Timeline"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Section2;
