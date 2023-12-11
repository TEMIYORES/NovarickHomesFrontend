import { useState } from "react";
import "./section8.scss";
const standard_600 = [
  {
    title: "3 months",
    initialDeposit: "",
    monthlyPayment: "",
    totalAmount: "₦35,000,000",
  },
  {
    title: "6 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦5,167,000",
    totalAmount: "₦36,000,000",
  },
  {
    title: "12 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦2,750,000",
    totalAmount: "₦38,000,000",
  },
  {
    title: "18 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦1,945,000",
    totalAmount: "₦40,000,000",
  },
];
const standard_300 = [
  {
    title: "3 months",
    initialDeposit: "",
    monthlyPayment: "",
    totalAmount: "₦23,000,000",
  },
  {
    title: "6 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦3,333,000",
    totalAmount: "₦25,000,000",
  },
  {
    title: "12 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦1,916,700",
    totalAmount: "₦28,000,000",
  },
  {
    title: "18 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦1,667,000",
    totalAmount: "₦35,000,000",
  },
];
const lakeview_500 = [
  {
    title: "3 months",
    initialDeposit: "",
    monthlyPayment: "",
    totalAmount: "₦40,000,000",
  },
  {
    title: "6 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦6,000,000",
    totalAmount: "₦41,000,000",
  },
  {
    title: "12 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦3,167,000",
    totalAmount: "₦43,000,000",
  },
  {
    title: "18 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦2,222,222",
    totalAmount: "₦45,000,000",
  },
];
const lagoon_500 = [
  {
    title: "3 months",
    initialDeposit: "",
    monthlyPayment: "",
    totalAmount: "₦50,000,000",
  },
  {
    title: "6 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦7,667,000",
    totalAmount: "₦51,000,000",
  },
  {
    title: "12 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦4,000,000",
    totalAmount: "₦53,000,000",
  },
  {
    title: "18 months",
    initialDeposit: "₦5,000,000",
    monthlyPayment: "₦2,778,000",
    totalAmount: "₦55,000,000",
  },
];
const Section8 = () => {
  const [priceplan, setPricePlan] = useState("standard");
  let data = [];
  let data1: any = [];
  switch (priceplan) {
    case "standard":
      data = standard_600;
      data1 = standard_300;
      break;
    case "lakeview":
      data = lakeview_500;
      data1 = [];
      break;
    case "lagoon":
      data = lagoon_500;
      data1 = [];
      break;
    default:
      data = standard_600;
      data1 = standard_300;
      break;
  }
  return (
    <div className="caribbean-section8">
      <div className="caribbean-section8-container">
        <div className="caribbean-section8-container-heading">
          Pricing & Payment Plan
        </div>
        <div className="caribbean-section8-pricing-header">
          <h2
            onClick={() => setPricePlan("standard")}
            className={`{priceplan == "standard" ? "active" : null}`}
          >
            Residental (Standard){" "}
          </h2>
          <h2
            onClick={() => setPricePlan("lakeview")}
            className={`priceplan == "lakeview" ? "active" : null`}
          >
            Residental (Lake View){" "}
          </h2>
          <h2
            onClick={() => setPricePlan("lagoon")}
            className={`priceplan == "lagoon" ? "active" : null`}
          >
            Residental (Lagoon View){" "}
          </h2>
        </div>
        <div className="caribbean-section8-container-price-plan">
          <div className="price-plan-heading">500 SQM</div>
          <div className="caribbean-section8-container-price-plan-container">
            {data.map((item, index) => {
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
          {data1.length == 0 ? (
            ""
          ) : (
            <>
              <div className="price-plan-heading">300 SQM</div>
              <div className="caribbean-section8-container-price-plan-container">
                {data1.map((item: any, index: any) => {
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section8;
