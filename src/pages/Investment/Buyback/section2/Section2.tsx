
import "./section2.scss";
const Section2 = () => {
  return (
    <>
      <div className="buyback-section2">
        <div className="buyback-section2-right">
          <div className="buyback-section2-right-title">ABOUT BUY-BACK</div>
          <div className="buyback-section2-right-desc">
            Buyback is when properties are purchased with the agreement to
            repurchase them back at a later date. In a bid to reduce the barrier
            to entry into real estate investment, Novarick Homes have launched
            the buy-back promo offer to help the average Nigerian with little
            capital to enjoy the benefits of investing in Real Estate.
            <span>
              With the buy-back promo, anyone can buy into any of our properties
              with as low as NGN 50,000, and we will buy it back at a guaranteed
              profit, within an agreed time.
            </span>
          </div>
        </div>
        <div className="buyback-section2-left">
          <iframe
            width="100%"
            height="380"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
            title="Novarick homes buyback property"
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
