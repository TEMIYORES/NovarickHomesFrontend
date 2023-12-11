import React from "react";

const Section7 = () => {
  const data1 = [
    {
      title: "3 months",
      initialDeposit: 0,
      monthlyPayment: 0,
      totalAmount: 0,
    },
    {
      title: "6 months",
      initialDeposit: "N761,382.40",
      monthlyPayment: "N761,382.40",
      totalAmount: "N4,568,294.40",
    },
    {
      title: "12 months",
      initialDeposit: "N1,521,666.67",
      monthlyPayment: 0,
      totalAmount: 0,
    },
  ];
  const data2 = [
    {
      title: "3 months",
      initialDeposit: 0,
      monthlyPayment: 0,
      totalAmount: 0,
    },
    {
      title: "6 months",
      initialDeposit: "N1,521,666.67",
      monthlyPayment: "N1,521,666.67",
      totalAmount: "N9,130,000",
    },
    {
      title: "12 months",
      initialDeposit: 0,
      monthlyPayment: 0,
      totalAmount: 0,
    },
  ];

  return (
    <>
      <div className="silverspring-section7">
        <div className="silverspring-section7-container">
          <div className="silverspring-section7-container-title">
            Price Plan
          </div>
          <div className="silverspring-section7-container-price-plan">
          <div className="price-plan-heading">1 unit</div>
            <div className="silverspring-section7-container-price-plan-container">
                
              {data1.map((item, index) => {
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
            </div>
            {/* <div className="price-plan-heading">600sqm</div>
            <div className="silverspring-section7-container-price-plan-container">
                
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
    </>
  );
};

export default Section7;
