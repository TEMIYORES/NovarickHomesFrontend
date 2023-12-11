import "./section8.scss";
import offer from "./offer.png";
import cybersecuriry from "./cyber-security.png";
import earning from "./earning.png";
const itemData = [
  {
    icon: offer,
    title: "Incredible Offer",
    desc: "Treasury Bills are currently at an all time low of 0.05% and the uncertainty of the stock exchange. The Novarick Buy-Back Scheme Plan is offering up to 45% ROI over a period of 6 – 24 Months..",
  },
  {
    icon: cybersecuriry,
    title: "Secured Investment",
    desc: "Your investment is guaranteed full security as Novarick Homes is committed to providing affordable and eco-friendly housing as well as investment opportunities across the real estate industry for the fast-growing, young, and dynamic population, with over 4 years of exceptional real estate and investment services.",
  },
  {
    icon: earning,
    title: "Multiple Earnings",
    desc: "Aside from your ROI as an investor, you can earn massive commission through referrals. Our Buy-Back Scheme pays an incredible commission for all referrals.",
  },
];
const Section8 = () => {
  return (
    <>
      <div className="buyback-section8">
        <div className="buyback-section8-container">
          <div className="buyback-section8-container-top">
            <div className="buyback-section8-container-top-title1">
              Why Invest?
            </div>
          </div>
          <div className="buyback-section8-container-bottom">
            {itemData.map((data) => {
              return (
                <div className="about-section8-container-item">
                  <img
                    src={data.icon}
                    alt="core-values"
                    className="about-section8-container-item-image"
                  />
                  <div className="about-section8-container-item-title">
                    {data.title}
                  </div>
                  <div className="about-section8-container-item-desc">
                    {data.desc}
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

export default Section8;
