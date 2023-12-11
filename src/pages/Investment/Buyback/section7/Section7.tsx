import "./section7.scss";
const itemData = [
  {
    title: "Silver",
    roi: "10",
    tenure: "6 months",
    style: { backgroundColor: "#C0C0C0" },
  },
  {
    title: "Gold",
    roi: "10",
    tenure: "12 months",
    style: { backgroundColor: "#e5b06f" },
  },
  {
    title: "Diamond",
    roi: "32",
    tenure: "18 months",
    style: { backgroundColor: "#b9f2ff" },
  },
  {
    title: "Platinum",
    roi: "45",
    tenure: "24 months",
    style: { backgroundColor: "#e5e4e2" },
  },
];
const Section7 = () => {
  return (
    <div className="buyback-section7">
      <div className="buyback-section7-container">
        <h2 className="buyback-section7-header">BUY-BACK PLANS</h2>
        <p className="buyback-section7-subheader">
          Our Buy Back plans offers up to 45% ROI with a 2 bedroom apartment in
          Lekki as collateral
        </p>
        <div className="buyback-section7-item-container">
          {itemData.map((item) => (
            <div className="buyback-section7-item" style={item.style}>
              <h3>{item.title}</h3>
              <h2>100k - 5m</h2>
              <ul>
                <li>ROI: {item.roi}%</li>
                <li>TENURE: {item.tenure}</li>
              </ul>
              <a href="#buy_back_form" className="buyback-section7-item-button">
                Register interest
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section7;
