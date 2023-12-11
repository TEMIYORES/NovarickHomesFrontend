import "./pricebanner.scss";
// import { Call } from "@mui/icons-material";
import promo from "./promo.png";
import { Link } from "react-router-dom";
const PriceBanner = () => {
  return (
    <>
      <div className="price-banner">
        <Link to="/lands/ridgewood">
          <img src={promo} alt="promo" />
        </Link>
      </div>
    </>
  );
};

export default PriceBanner;
