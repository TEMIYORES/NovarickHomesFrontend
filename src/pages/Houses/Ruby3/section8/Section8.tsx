import "./section8.scss";
const data1 = [
  {
    title: "3 months",
    initialDeposit: "₦10,000,000",
    monthlyPayment: "₦13,666,667",
    totalAmount: "₦51,000,000",
  },
  {
    title: "6 months",
    initialDeposit: "₦10,000,000",
    monthlyPayment: "₦7,000,000",
    totalAmount: "₦52,000,000",
  },
  {
    title: "8 months",
    initialDeposit: "₦10,000,000",
    monthlyPayment: "₦5,500,000",
    totalAmount: "₦54,000,000",
  },
];
const Section8 = () => {
  return (
    <div className="ruby3-section8">
      <div className="ruby3-section8-container">
        <div className="ruby3-section8-container-heading">
          Pricing & Payment Plan
        </div>
        <div className="ruby3-section8-container-outright">
          <div className="ruby3-section8-container"></div>
          <span className="ruby3-section8-container-value">₦50 Million</span>
          <hr />
          <div className="ruby3-section8-container-desc">Outright Price</div>
        </div>
        <div className="ruby3-section8-container-price-plan">
          <div className="price-plan-heading">1 unit</div>
          <div className="ruby3-section8-container-price-plan-container">
            {data1.map((item, index) => {
              return (
                <div
                  className="price-plan-container-price-plan-card"
                  key={index}
                >
                  <div className="price-plan-card-title">{item.title}</div>
                  <ul>
                    <li>
                      <span className="initial">Initial Deposit:</span>{" "}
                      <span className="initialValue">
                        {item.initialDeposit}
                      </span>
                    </li>
                    <li>
                      <span className="monthly">Monthly Payment:</span>{" "}
                      <span className="monthlyValue">
                        {item.monthlyPayment}
                      </span>
                    </li>
                    <li>
                      <span className="total">Total Amount:</span>{" "}
                      <span className="totalValue">{item.totalAmount}</span>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
