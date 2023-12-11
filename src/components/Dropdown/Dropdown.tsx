import { useState } from "react";
import "./dropdown.scss";

import { Company, Learn, Business } from "./DropdownMenuItems";
import { Link } from "react-router-dom";
// import Learnmore from "../Learnmore/Learnmore";

const Dropdown = ({ name, backgroundcolor, closeDropDown }: any) => {
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  let data: any = [];
  switch (name) {
    case "business":
      data = [...Business];
      break;
    case "company":
      data = [...Company];
      break;
    case "learn":
      data = [...Learn];
      break;
    default:
      break;
  }

  return (
    <>
      <div
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        data-aos="fade-up"
        data-aos-duration="500"
        style={backgroundcolor}
      >
        {data.map((item: any, index: any) => (
          <Link
            className="dropdown-container"
            key={index}
            to={item.path}
            onClick={() => {
              setClick(true);
              closeDropDown();
            }}
          >
            <div className="dropdown-top">
              <img src={item.icon} alt="house" className="dropdown-top-image" />
            </div>
            <div className="dropdown-middle">
              <div className="dropdown-middle-title">{item.title}</div>
              <p>{item.desc}</p>
            </div>
            <div className="dropdown-bottom">
              {/* {item.isLearnmore && (
                <Learnmore
                  path={item.path}
                  text={"Learn more"}
                  onClick={() => {
                    setClick(true);
                    closeDropDown();
                  }}
                />
              )} */}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Dropdown;
