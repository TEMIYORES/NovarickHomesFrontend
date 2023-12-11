import "./caribbeanlocation.scss";
const CaribbeanLocation = () => {
  return (
    <>
      <div className="caribbeanlocation-heading">SUPERB LOCATION</div>

      <div className="caribbeanlocation-container">
        <div className="caribbeanlocation-text">
          <p>
            The Caribbean Lake City is located at Sangotedo, just directly
            opposite the Shoprite Mall. It’s about 2 minutes drive from the
            expressway, and designed to take advantage of the waterways, thereby
            providing a sense of luxury and accessibility for its residents.
          </p>
          <p>
            Caribbean Lake City’s highly attractive landscape has a central
            location with access to both intra-city roads and the Lagos
            Waterways. With partnership with the Lagos State Waterways Authority
            (LASWA), residents can commute to popular destinations within
            minutes.
          </p>
          <div className="caribbeanlocation-heading2">
            <hr />
            Neighbourhood
            <hr />
          </div>
          <ul>
            <li>Novare Mall - Shoprite</li>
            <li>Lagos Business School (LBS)</li>
            <li>Omu Resort</li>
            <li>Laguna Beach Resort</li>
            <li>Crown Estate</li>
          </ul>
          <p className="quote">
            "For precise directions, it is recommended to use GPS navigation or
            consult a local map. Additionally, you can contact the developer or
            estate agent associated with Caribbean Lagos Estate for more
            detailed location information and assistance in finding the estate
            within the Ketu area of Epe, Lagos."
          </p>
        </div>
        <div className="mapouter">
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

export default CaribbeanLocation;
