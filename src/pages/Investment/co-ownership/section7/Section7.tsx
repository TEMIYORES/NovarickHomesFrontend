import "./section7.scss";
// const itemData = [
//   {
//     title: "Silver",
//     roi: "10",
//     tenure: "6 months",
//     style: { backgroundColor: "#C0C0C0" },
//   },
//   {
//     title: "Gold",
//     roi: "10",
//     tenure: "12 months",
//     style: { backgroundColor: "#e5b06f" },
//   },
//   {
//     title: "Diamond",
//     roi: "32",
//     tenure: "18 months",
//     style: { backgroundColor: "#b9f2ff" },
//   },
//   {
//     title: "Platinum",
//     roi: "45",
//     tenure: "24 months",
//     style: { backgroundColor: "#e5e4e2" },
//   },
// ];
const Section7 = () => {
  return (
    <div className="co_ownership-section7">
      <div className="co_ownership-section7-container">
        <h2 className="co_ownership-section7-header">CO-OWNERSHIP PLAN</h2>
        <p className="co_ownership-section7-subheader">
          Our Co-Ownership plan offers up to 1/10th ownership a 2 bedroom
          apartment in Lekki which sells for 50 Million naira.
        </p>
        <div className="co_ownership-section7-item-container">
          <div className="co_ownership-section7-container-outright">
            <span className="co_ownership-section7-container-value">
              ₦5 Million
            </span>
            <hr />
            <div className="co_ownership-section7-container-desc">
              Outright Price
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
