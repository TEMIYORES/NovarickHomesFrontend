import React from "react";
import "./section8.scss";
const data1 = [
  {
    title: "3 months",
    initialDeposit: "₦20,000,000",
    monthlyPayment: "₦23,666,666.66",
    totalAmount: "₦91,000,000",
  },
  {
    title: "6 months",
    initialDeposit: "₦20,000,000",
    monthlyPayment: "₦12,000,000",
    totalAmount: "₦92,000,000",
  },
  {
    title: "8 months",
    initialDeposit: "₦20,000,000",
    monthlyPayment: "₦9,250,000",
    totalAmount: "₦94,000,000",
  },
];
const Section8 = () => {
  return (
    <div className="ruby2-section8">
      <div className="ruby2-section8-container">
        <div className="ruby2-section8-container-heading">
          Pricing & Payment Plan
        </div>
        <div className="ruby2-section8-container-outright">
          <span className="ruby2-section8-container-value">₦90 Million</span>
          <hr />
          <div className="ruby2-section8-container-desc">Outright Price</div>
        </div>
        <div className="ruby2-section8-container-price-plan">
          <div className="price-plan-heading">1 unit</div>
          <div className="ruby2-section8-container-price-plan-container">
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
          {/* <div className="price-plan-heading">600sqm</div>
            <div className="ruby2-section8-container-price-plan-container">
                
              {data2.map((item, index) => {
                return (
                  <div
                    className="price-plan-container-price-plan-card"
                    key={index}
                  >
                    <div className="price-plan-card-title">{item.title}</div>
                    <ul>
                      <li>
                        <span className="initial">Initialdeposit:</span>{" "}
                        <span className="initialValue">
                          {item.initialDeposit}
                        </span>
                      </li>
                      <li>
                        <span className="monthly">Monthly payment:</span>{" "}
                        <span className="monthlyValue">
                          {item.monthlyPayment}
                        </span>
                      </li>
                      <li>
                        <span className="total">Total amount:</span>{" "}
                        <span className="totalValue">{item.totalAmount}</span>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section8;
