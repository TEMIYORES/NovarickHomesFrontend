import { useState } from "react";
import "./faq.scss";
const data = [
  {
    question: "What is Buy Back promo?",
    answer:
      "In a bid to reduce the barrier to entry into real estate investment, Novarick Homes have launched the buy-back promo offer to help the average Nigerian with little capital to enjoy the benefits of investing in Real Estate. With the buy-back promo, anyone can buy into any of our properties with as low as NGN 500,000, and we will buy it back at a guaranteed profit, within an agreed time.you can buy into a unit of our 2bedroom apartment with as low as N500,000 and own 1% stake in the property, you then resell back to us at an agreed return of up to 45% in 24 months. Click here to learn more.",
  },
  {
    question: "How does it work?",
    answer:
      "You buy into a unit of our 2bedroom apartment with as low as N500,000 and own 1% stake in the property, you then resell back to us at an agreed return, within 6,12,18 or 24 months.",
  },
  {
    question: "What are we doing with the money?",
    answer:
      "The money is used in developing our project, Ruby 3 apartments which consists of 14 units of 2 bedroom apartment, our properties are prone to quick appreciation based on their locations and title. We develop these properties, sell-off and share the profit with you.",
  },
  {
    question: "When is the delivery date of the project?",
    answer: "The delivery date of the Ruby 3 apartments is June 2023",
  },
  {
    question: "What is the guarantee on Capital invested?",
    answer:
      "your money is tied to an actual project, and because real estate constantly appreciates, at the agreed time, you get value for your money – You get a post-dated cheque",
  },
  {
    question: "What is the minimum capital involved?",
    answer: "NGN50,000",
  },
  {
    question: "What is the maximum capital involved?",
    answer: "NGN5,000,000",
  },
  {
    question: "Is there a payment plan?",
    answer: "There are no payment plans, payment is on an outright basis ONLY.",
  },
  {
    question: "What is the return on Capital invested?",
    answer:
      "SILVER (6 MONTHS)        – 10% GOLD (12 MONTHS)         – 22%DIAMOND (18 MONTHS)   -32%PLATINUM (24 MONTHS)  – 45%",
  },
  {
    question: "Can I re-invest my funds upon or after maturity?",
    answer: "Yes, you can",
  },
  {
    question: "Can I resell my unit myself?",
    answer:
      "NO, units cannot be resold by subscribers, however, your returns are guaranteed",
  },
  {
    question: "Can I opt out before my due date?",
    answer: "YES, but it comes with a 20% deduction for administrative fees",
  },
  {
    question: "What documents do I get after payment?",
    answer: "The following documents are issued upon payment:– Receipts– MOU",
  },
];
const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="faq">
      <div className="faq-container">
        <h2 className="faq-header">Frequently Asked Questions</h2>
        <div className="accordion-wrapper">
          <div className="accordion">
            {data.map((item, i) => (
              <div className="accordion-item" key={i} onClick={() => toggle(i)}>
                <div className="accordion-title">
                  <h3>{item.question}</h3>
                  <span>{selected == i ? "-" : "+"}</span>
                </div>
                <div
                  className={
                    selected == i
                      ? "accordion-content show"
                      : "accordion-content"
                  }
                >
                  - {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
