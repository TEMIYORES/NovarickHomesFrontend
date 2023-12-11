import "./section3.scss";
import {
  BalconyOutlined,
  BedroomBabyOutlined,
  CountertopsOutlined,
  EmojiObjectsOutlined,
  GarageOutlined,
  LivingOutlined,
  SecurityOutlined,
  WeekendOutlined,
} from "@mui/icons-material";

const className = "ruby2-section3-container-bottom-item-icon";

const itemData = [
  {
    icon: <CountertopsOutlined className={className} />,
    title: "Fully Fitted Kitchen",
  },
  {
    icon: <BedroomBabyOutlined className={className} />,
    title: "Standard Bedroom",
  },
  {
    icon: <SecurityOutlined className={className} />,
    title: "24/7 Hours Security",
  },
  {
    icon: <EmojiObjectsOutlined className={className} />,
    title: "24hrs Power Supply",
  },
  {
    icon: <WeekendOutlined className={className} />,
    title: "Family Lounge",
  },
  {
    icon: <BalconyOutlined className={className} />,
    title: "Glazed Balcony",
  },
  {
    icon: <LivingOutlined className={className} />,
    title: "Large Living Areas",
  },
  {
    icon: <GarageOutlined className={className} />,
    title: "Ample Car Park",
  },
];
const Section3 = () => {
  return (
    <>
      <div className="ruby2-section3">
        <div className="ruby2-section3-container">
          <div className="ruby2-section3-container-top">
            <div className="ruby2-section3-container-top-title1">
              Property Amenities
            </div>
            <div className="ruby2-section3-container-top-title2">
              Ruby II embodies living in bliss and comfort
            </div>
          </div>
          <div className="ruby2-section3-container-bottom">
            {itemData.map((item) => {
              return (
                <div
                  key={item.title}
                  className="ruby2-section3-container-bottom-item"
                >
                  {item.icon}
                  <div className="ruby2-section3-container-bottom-item-desc">
                    {item.title}
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

export default Section3;
