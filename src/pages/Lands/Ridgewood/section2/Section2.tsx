import "./section2.scss";
const Section2 = () => {
  return (
    <>
      <div className="ridgewood-section2 flex-col lg:flex-row">
        <div className="ridgewood-section2-right">
          <div className="ridgewood-section2-right-title">
            Home of Nigeria’s First Wellness Resort
          </div>
          <div className="ridgewood-section2-right-desc">
            A leap away from the ordinary, The Ridgewood Lagos by Novarick
            presents a smart green communitygeared towards nature and wellness.
            <span>
              The Ridgewood Lagos estate is designed as the perfect getaway
              community and the suburban haven,miles away from the noise and
              restlessness of the city, but offering all features and amenities
              that relishes tranquilityand helps you be in touch with nature
              with special provisions for naturally preserved green areas to
              promote mental rejuvenation and physical wellness.
            </span>
            <span>
              Blending traditional country estate style with modern amenities,
              functionality and hospitality services, The Ridgewood Lagos Estate
              offers site and service plots, short stay hospitality services,
              recreational facilities, a Garden and park, in an eco-friendly and
              natural setting, away from the distractions and stress ofurban
              life.
            </span>
            <span>
              The Ridgewood Lagos is home to “Alafia Resort and Spa” an
              exclusive 30 rooms short stay resort with a 5 rooms massage
              parlorand spa designed as an ultimate oasis oftranquility.
            </span>
          </div>
        </div>
        <div className="ridgewood-section2-left">
          <iframe
            width="100%"
            height="420"
            src="https://www.youtube.com/embed/wnvnoJnxix8?autoplay=1&mute=1"
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
