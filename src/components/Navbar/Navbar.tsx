import { useState } from "react";
import "./navbar.scss";
import { Close, KeyboardArrowDown, Menu, WhatsApp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import { Img87 } from "../../assets/images";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [navColor, setNavColor] = useState("");
  const handleClick = () => setClick(!click);

  let backgroundcolor;
  let navItemColor;
  switch (navColor) {
    case "project":
      backgroundcolor = { backgroundColor: "#fff" };
      break;
    case "company":
      backgroundcolor = { backgroundColor: "#d9f2ed" };
      break;
    case "learn":
      backgroundcolor = { backgroundColor: "#fde9d2" };
      break;
    case "transparent":
      backgroundcolor = { backgroundColor: "#00000055", boxShadow: "none" };
      navItemColor = { color: "#fff" };
      break;
    default:
      break;
  }

  const clickChangeNavItem = (prop: any) => {
    if (window.innerWidth <= 1080) {
      switch (prop) {
        case "project":
          setNavColor("project");
          setDropdown(!dropdown);
          setDropdown2(false);
          setDropdown3(false);
          break;
        case "company":
          setNavColor("company");
          setDropdown(false);
          setDropdown2(!dropdown2);
          setDropdown3(false);
          break;
        case "learn":
          setNavColor("learn");
          setDropdown(false);
          setDropdown2(false);
          setDropdown3(!dropdown3);
          break;
        case "":
          setNavColor("");
          break;
        default:
          break;
      }
    }
  };
  const hoverChangeNavItem = (prop: any) => {
    if (window.innerWidth > 1080) {
      switch (prop) {
        case "project":
          setNavColor("project");
          setDropdown(true);
          setDropdown2(false);
          setDropdown3(false);
          break;
        case "company":
          setNavColor("company");
          setDropdown(false);
          setDropdown2(true);
          setDropdown3(false);
          break;
        case "learn":
          setNavColor("learn");
          setDropdown(false);
          setDropdown2(false);
          setDropdown3(true);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <div
        className="navbar"
        style={backgroundcolor}
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <div className="navbar-left">
          <Link to="/" className="navbar-left-logo" style={navItemColor}>
            <img src={Img87} alt="logo" />
          </Link>
        </div>

        <div className={click ? "navbar-middle active" : "navbar-middle"}>
          <ul
            className="navbar-middle-nav-menu"
            onMouseLeave={() => {
              setNavColor("");
            }}
          >
            <li
              style={navItemColor}
              onMouseLeave={() => {
                if (window.innerWidth > 1080) {
                  setDropdown2(false);
                }
              }}
            >
              <a
                style={navItemColor}
                className="navbar-middle-nav-menu-nav-item"
                onClick={() => clickChangeNavItem("company")}
                onMouseEnter={() => hoverChangeNavItem("company")}
              >
                Company
                <KeyboardArrowDown fontSize="medium" />
              </a>
              {dropdown2 && (
                <Dropdown
                  name="company"
                  closeDropDown={handleClick}
                  backgroundcolor={{ backgroundColor: "#d9f2ed" }}
                />
              )}
            </li>
            <li
              onMouseLeave={() => {
                if (window.innerWidth > 1080) {
                  setDropdown(false);
                }
              }}
            >
              <a
                style={navItemColor}
                className="navbar-middle-nav-menu-nav-item"
                onClick={() => clickChangeNavItem("project")}
                onMouseEnter={() => hoverChangeNavItem("project")}
              >
                Projects
                <KeyboardArrowDown fontSize="medium" />
              </a>
              {dropdown && (
                <Dropdown
                  name="business"
                  closeDropDown={handleClick}
                  backgroundcolor={{ backgroundColor: "#fff" }}
                />
              )}
            </li>
            <li
              style={navItemColor}
              onMouseLeave={() => {
                if (window.innerWidth > 1080) {
                  setDropdown3(false);
                }
              }}
            >
              <a
                style={navItemColor}
                className="navbar-middle-nav-menu-nav-item"
                onClick={() => clickChangeNavItem("learn")}
                onMouseEnter={() => hoverChangeNavItem("learn")}
              >
                Learn
                <KeyboardArrowDown fontSize="medium" />
              </a>
              {dropdown3 && (
                <Dropdown
                  name="learn"
                  closeDropDown={handleClick}
                  backgroundcolor={{ backgroundColor: "#FDE9D2" }}
                />
              )}
            </li>
            <li style={navItemColor}>
              <a
                style={navItemColor}
                className="navbar-middle-nav-menu-nav-item"
              >
                Realtor
              </a>
            </li>
          </ul>

          <div className="navbar-middle-services">
            <a
              href="https://wa.me/+2348105140514"
              className="navbar-middle-services-sales"
              target="_blank"
              style={{ ...navItemColor, textDecoration: "none" }}
            >
              <WhatsApp style={navItemColor} /> Sales & Support
            </a>
            <Button
              class="navbar-middle-services-button"
              text={"Get in touch"}
              url={"/contact"}
            />
          </div>
        </div>
        <div className="navbar-menu-icon" onClick={handleClick}>
          {click ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
