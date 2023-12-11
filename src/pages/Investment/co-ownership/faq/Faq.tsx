import { useState } from "react";
import "./faq.scss";
const data = [
  {
    question: "What is the concept of co-ownership of the Ruby III apartment?",
    answer:
      "Co-ownership of the Ruby III Apartment refers to the joint ownership of 1 unit of 2-bedroom apartment by up to 10 individuals. Each individual will own 10% stake of the Unit. Think of it as owning shares/stock of a company. The concept was designed to reduce the barrier of entry into real estate investment for Nigerians, and also help them share their risk. With as low as 5 Million Naira, an individual can own 10% stake of an apartment.",
  },
  {
    question: "What project is the Ruby III Apartment?",
    answer:
      "The Ruby III Apartment project is a development by novarick Homes, consisting of 14 units of 2 bedroom serviced apartments, located at Ologolo, Lekki. It has ample parking space for each unit, clean water, 24/7 security and power. The project is suitable for shortlet.",
  },
  {
    question: "What title does the Ruby III Apartment project have?",
    answer:
      "The title on the Ruby III Apartment project is a Governor’s consent.",
  },
  {
    question: "What documents do I get when I buy?",
    answer:
      "You will get a Receipt, and contract of sale. You will also get a deed of assignment upon completion and handover of the project.",
  },
  {
    question: "So, how much stake can I buy? With how much?",
    answer:
      "The ownership of a unit is split into 10 places (slot), 1 slot is 10% ownership stake, and that is the minimum stake you can have in one unit, and a maximum of 100% stake, i.e 10 slots. One unit of the Ruby III apartment is going for NGN 50,000,000 (Fifty Million Naira), which means that you can buy a minimum of 1 slot with NGN  5,000,000 (Five Million Naira).",
  },
  {
    question: "Do I have to bring other people to buy?",
    answer:
      "No. You do not have to know the other people buying. The company will market to other investors to buy, however you can refer people to buy from your unit slot.",
  },
  {
    question:
      "Can the ownership stake (slot) be transferred or sold to others?",
    answer:
      "Yes, you can resell your stake (slot) to others, who will then join the pool of investors, you would however need to inform the company to prepare all the necessary legal documentation to transfer ownership. In time ownership will be transferred and confirmed through blockchain technology.",
  },
  {
    question: "Can the company resell my stake (slot) for me?",
    answer:
      "The company can help to remarket your stake (slot) to existing members, and also push it out to the general public, the value however will be determined by a registered estate valuer appointed by the company.",
  },
  {
    question:
      "How will the maintenance and expenses of the property be managed?",
    answer:
      "The co-owners will typically establish a framework for managing the maintenance and expenses of the property. A mobile application will be employed to manage the administration, decision-making, and financial contributions related to the property’s upkeep.",
  },
  {
    question: "How will I make money from the property?",
    answer:
      "The property will be put on short lease and managed by an approved facility manager appointed by the company on behalf of the Owners.",
  },
  {
    question:
      "Are there any legal agreements or documents required for the co-ownership?",
    answer:
      "Yes. There are legal agreements in place. These agreements will outline ownership shares, responsibilities, decision-making processes, and dispute resolution mechanisms and others.",
  },
  {
    question: "What are the advantages of the Ruby III Co-Ownership Scheme?",
    answer:
      "The Ruby III Co-ownership allows individuals to own a high valued property that might be beyond their individual affordability. It also enables shared expenses, potentially reducing the financial burden on individual owners. Additionally, co-ownership can provide an opportunity for investment diversification and shared decision-making in property management.",
  },
  {
    question: "Is co-ownership suitable for everyone?",
    answer: "Yes, Co-ownership is suitable for everyone.",
  },
  {
    question: "Are there other fees to be paid asides the purchase price?",
    answer:
      " Yes. Unit price – 50M Price per slot – 5M (10% ownership) Other fees Legal/documentation- 50,000Electricity connection fee 100,000 Interior furnishing – 400,000 Service charge – 75,000 Sinking fund – 50,000 Total: N5,675,000 per slot",
  },
  {
    question:
      "Can less than 10 people come together to co-own a unit in Ruby III?",
    answer: "Yes, Provided that the payment will be covered.",
  },
];
const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i:any) => {
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
