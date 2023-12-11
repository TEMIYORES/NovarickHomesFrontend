import "./section8.scss";
import offer from "./offer.png";
import cybersecuriry from "./cyber-security.png";
import earning from "./earning.png";
import portfolio from "./portfolio.png";
import location from "./location.png";
import responsibility from "./responsibility.png";
import paymentMethod from "./payment-method.png";
import graph from "./graph.png";
import thumbsup from "./thumbs-up.png";

const itemData = [
  {
    icon: offer,
    title: "Cost Sharing",
    desc: "Joint ownership allows individuals to pool their financial resources, making the purchase of Ruby 3 more affordable by splitting the costs among the co-owners.",
  },
  {
    icon: earning,
    title: "Rental Income Potential",
    desc: "By renting out Ruby 3, co-owners can generate consistent rental income. The property’s location in Ologolo, Lekki, may attract tenants seeking a desirable living environment, increasing the likelihood of steady rental returns.",
  },
  {
    icon: cybersecuriry,
    title: "Reduced Financial Risk",
    desc: "Sharing the financial burden with other co-owners helps mitigate individual risk. If there are unexpected expenses or fluctuations in the real estate market, the impact is divided among multiple parties.",
  },
  {
    icon: portfolio,
    title: "Diversified Investment Portfolio",
    desc: "Investing in joint ownership of Ruby 3 enables individuals to diversify their investment portfolio. By spreading their investments across multiple assets, they reduce the risk associated with putting all their resources into a single property.",
  },
  {
    icon: location,
    title: "Access to Desirable Location",
    desc: "Joint ownership can provide access to a desirable location like Ologolo, Lekki, which may be otherwise financially out of reach for individual investors. Co-owning Ruby 3 allows investors to tap into the potential growth and benefits of this sought-after location",
  },
  {
    icon: responsibility,
    title: "Shared Responsibilities",
    desc: "With joint ownership, the responsibilities of property maintenance, repairs, and management can be shared among the co-owners, making it more manageable and less time-consuming for each individual.",
  },
  {
    icon: paymentMethod,
    title: "Increased Buying Power",
    desc: "By combining resources, co-owners have a higher purchasing power, enabling them to acquire a larger, more desirable property like Ruby 3 than they could on their own.",
  },
  {
    icon: graph,
    title: "Flexibility in Usage",
    desc: "Joint owners can establish agreements on property usage, whether for personal purposes or rental income generation. This flexibility allows for shared enjoyment of the property or the potential to earn rental income when not in use.",
  },
  {
    icon: thumbsup,
    title: "Potential Appreciation",
    desc: "Real estate properties, especially in desirable locations like Ologolo, Lekki, have the potential to appreciate over time. Investing in joint ownership of Ruby 3 allows individuals to benefit from any potential increase in property value, providing a return on investment when the property is eventually sold.",
  },
];
const Section8 = () => {
  return (
    <>
      <div className="co_ownership-section8">
        <div className="co_ownership-section8-container">
          <div className="co_ownership-section8-container-top">
            <div className="co_ownership-section8-container-top-title1">
              why you should buy into the Ruby III Co-Ownership Project
            </div>
          </div>
          <div className="co_ownership-section8-container-bottom">
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
