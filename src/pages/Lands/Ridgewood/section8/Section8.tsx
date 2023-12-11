import "./section8.scss";
const data1 = [
  {
    title: "3 months",
    initialDeposit: "₦1,000,000",
    monthlyPayment: "₦2,333,334",
    totalAmount: "₦8,000,000",
  },
  {
    title: "6 months",
    initialDeposit: "₦2,000,000",
    monthlyPayment: "₦1,167,000",
    totalAmount: "₦9,000,000",
  },
  {
    title: "12 months",
    initialDeposit: "₦2,000,000",
    monthlyPayment: "₦750,000",
    totalAmount: "₦11,000,000",
  },
  {
    title: "18 months",
    initialDeposit: "₦2,000,000",
    monthlyPayment: "₦611,000",
    totalAmount: "₦13,000,000",
  },
];
const data2 = [
  {
    title: "3 months",
    initialDeposit: "₦1,000,000",
    monthlyPayment: "₦1,000,000",
    totalAmount: "₦4,000,000",
  },
  {
    title: "6 months",
    initialDeposit: "₦1,000,000",
    monthlyPayment: "₦666,667",
    totalAmount: "₦5,000,000",
  },
  {
    title: "12 months",
    initialDeposit: "₦1,000,000",
    monthlyPayment: "₦500,000",
    totalAmount: "₦7,000,000",
  },
  {
    title: "18 months",
    initialDeposit: "₦1,000,000",
    monthlyPayment: "₦444,445",
    totalAmount: "₦9,000,000",
  },
];
const Section8 = () => {
  return (
    <div className="ridgewood-section8">
      <div className="ridgewood-section8-container">
        <div className="ridgewood-section8-container-heading">
          Pricing & Payment Plan
        </div>
        {/* <div className="ridgewood-section8-container-outright">
          <div className="ridgewood-section8-container"></div>
          <span className="ridgewood-section8-container-value">₦8 Million</span>
          <hr />
          <div className="ridgewood-section8-container-desc">Outright Price</div>
        </div> */}
        <div className="ridgewood-section8-container-price-plan">
          <div className="price-plan-heading">600 SQM</div>
          <div className="ridgewood-section8-container-price-plan-container">
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
          <div className="price-plan-heading">300 SQM</div>
          <div className="ridgewood-section8-container-price-plan-container">
            {data2.map((item, index) => {
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
