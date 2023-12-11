import React from "react";
import "./ridgewoodlocation.scss";
const RidgewoodLocation = () => {
  return (
    <>
      <div className="ridgewoodlocation-heading">SUPERB LOCATION</div>
      <div className="ridgewoodlocation-heading2">
        <hr />
        Neighbourhood
        <hr />
      </div>
      <div className="ridgewoodlocation-container  flex-col lg:flex-row">
        <div className="ridgewoodlocation-text flex-1">
          <p>
            The Ridgewood Lagos is located in Ketu-Epe Local government area, a
            stone's throw from the Ikorodu Epe expressway and Ridgewood Lagos is
            in close proximity to prominent landmarks, like the Lekki
            International Airport, Yaba Tech, Lagos State Food, and Logistics
            Hub, Lagos State Models schools, and manymore.
          </p>
          <p>
            With proximity to green spaces and locations with less air
            pollution, RidgeWood’s highly attractive landscape has a central
            location with access to good intra-city roads and
            high-networkneighborhoods.
          </p>
          <ul>
            <li>Pan-Atlantic University</li>
            <li>Emerald Farms and Consultants.</li>
            <li>Petrol StationsGeneral Hospital Epe</li>
            <li>Epe Resort and SpaAlaro City</li>
            <li>Atlantic Hall School</li>
            <li>St Augustine University</li>
            <li>Epe Mangroves</li>
            <li>Epe Recreational Center</li>
          </ul>
          <p className="quote">
            "For precise directions, it is recommended to use GPS navigation or
            consult a local map. Additionally, you can contact the developer or
            estate agent associated with Ridgewood Lagos Estate for more
            detailed location information and assistance in finding the estate
            within the Ketu area of Epe, Lagos."
          </p>
        </div>
        <div className="mapouter flex-1">
          <div className="gmap_canvas">
            <iframe
              title="Novarick homes"
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=novarick%20homes%20Lagos+(Novarick%20Homes)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              frameBorder="0"
              scrolling="no"
            ></iframe>

            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default RidgewoodLocation;
