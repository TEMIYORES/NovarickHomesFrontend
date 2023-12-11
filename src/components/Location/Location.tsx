import "./location.scss";
const Location = () => {
  return (
    <>
      <div className="location-heading">Location</div>
      <div className="location-heading2">
        <hr />
        Neighbourhood
        <hr />
      </div>
      <div className="location-container">
        <div className="location-text">
          <p>
            Ruby2 Terraces is a residential development located in Ologolo,
            Lekki, Lagos. The project has obtained Governor's Consent, ensuring
            its legal compliance and providing added security to prospective
            buyers. Ologolo is a vibrant neighborhood situated in the Lekki
            peninsula, known for its proximity to various amenities and
            attractions.
          </p>
          <p>
            To provide more specific directions, Ruby2 Terraces can be found by
            following these directions:
          </p>
          <ul>
            <li>Head towards the Lekki-Epe Expressway in Lagos.</li>
            <li>
              Continue on the expressway and pass through the Jakande
              Roundabout.
            </li>
            <li>
              After passing the Jakande Roundabout, proceed further on the
              Lekki-Epe Expressway.
            </li>
            <li>Keep driving until you reach Ologolo Junction.</li>
            <li>Take a left turn at the Ologolo Junction.</li>
            <li>
              Drive along the road until you locate Ruby2 Terraces on your
              right-hand side.
            </li>
          </ul>
          <p className="quote">
            "Please note that it is always recommended to use GPS navigation or
            consult a local map for precise directions to Ruby2 Terraces in
            Ologolo, Lekki."
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

export default Location;
