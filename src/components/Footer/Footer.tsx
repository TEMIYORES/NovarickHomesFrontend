import {
  Call,
  ContactMail,
  FacebookOutlined,
  Instagram,
  LinkedIn,
  LocationCity,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Img87 } from "../../assets/images";
import "./footer.scss";
import Container from "../Container";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#f8f9fb]">
        <Container>
          <div className="footer">
            <div className="footer-top">
              <Link to="/" className="footer-logo">
                <img src={Img87} alt="logo" />
              </Link>
              <hr />
              <div className="footer-contact-links">
                Follow Us :
                <a
                  href="https://www.facebook.com/novarickhomes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookOutlined style={{ color: "#4064AD" }} />
                </a>
                <a
                  href="https://twitter.com/novarickhomes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter style={{ color: "#1C9DEA" }} />
                </a>
                <a
                  href="https://www.youtube.com/@NovarickHomes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <YouTube style={{ color: "red" }} />
                </a>
                <a
                  href="https://www.instagram.com/novarickhomes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram
                    style={{
                      color: "white",
                      backgroundColor: "#DC1F33",
                      borderRadius: "5px",
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/novarickhomes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn style={{ color: "#0072b1" }} />
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-container">
                <ul className="footer-bottom-container-links">
                  <div className="footer-bottom-container-links-title">
                    Contact
                  </div>
                  <li className="footer-bottom-container-links-contact">
                    <LocationCity style={{ color: "#066756" }} />
                    <Link to="/">
                      28, Daniyan Natalia street, Lekki Phase 1, Lagos, Nigeria
                    </Link>
                  </li>
                  <li className="footer-bottom-container-links-contact">
                    <Call style={{ color: "#066756" }} />
                    <a href="tel:+2348105140514">081 0514 0514</a>
                  </li>
                  <li className="footer-bottom-container-links-contact">
                    <Call style={{ color: "#066756" }} />
                    <a href="tel:+2349065318358">090 6531 8358</a>
                  </li>
                  <li className="footer-bottom-container-links-contact">
                    <ContactMail style={{ color: "#066756" }} />
                    <Link to="/">marketing@novarickhomes.com</Link>
                  </li>
                </ul>
                <ul className="footer-bottom-container-links">
                  <div className="footer-bottom-container-links-title">
                    Useful Links
                  </div>
                  <li>
                    <Link to="/houses/ruby1">Ruby I</Link>
                  </li>
                  <li>
                    <Link to="/houses/ruby2">Ruby II</Link>
                  </li>
                  <li>
                    <Link to="/houses/ruby3">Ruby III</Link>
                  </li>
                  <li>
                    <Link to="/lands/ridgewood">The Ridgewood</Link>
                  </li>
                  <li>
                    <Link to="/lands/caribbean">Caribbean Lake City</Link>
                  </li>
                  <li>
                    <Link to="/investments/buyback">Buy-Back</Link>
                  </li>
                  <li>
                    <Link to="/investments/co-ownership">Co-Ownership</Link>
                  </li>
                </ul>
                <ul className="footer-bottom-container-links">
                  <div className="footer-bottom-container-links-title">
                    Resources
                  </div>
                  <li>
                    <Link to="/">Ruby 2 Brochure</Link>
                  </li>
                  <li>
                    <Link to="/">Ruby 3 Brochure</Link>
                  </li>
                  <li>
                    <Link to="/">Ridgewood Lagos Brochure</Link>
                  </li>
                  <li>
                    <Link to="/">Caribbean Lake City Brochure</Link>
                  </li>
                  <li>
                    <Link to="/">Buy-Back Brochure</Link>
                  </li>
                  <li>
                    <Link to="/">Co-Ownership Brochure</Link>
                  </li>
                </ul>
                <ul className="footer-bottom-container-links">
                  <div className="footer-bottom-container-links-title">
                    About
                  </div>
                  <li>
                    <Link to="/"> About Novarick</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Realtor</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-copywright">
              <small>Copyright © Novarick Homes 2022.</small>
              <small>Developed by Qayyum Ibrahim (+2347026010646)</small>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
