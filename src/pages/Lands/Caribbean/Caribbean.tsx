import { useEffect } from "react";
import PriceBanner from "../../../components/PriceBanner/PriceBanner";
import Ridgewoodform from "../../../components/Ridgewoodform/Ridgewoodform";
import "./caribbean.scss";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import Section8 from "./section8/Section8";
import Caribbeangallery from "../../../components/CaribbeanGallery/Caribbeangallery";

const Caribbean = () => {
  useEffect(() => {
    document.title = "Novarick | Caribbean";
  });
  return (
    <>
      <div className="caribbean">
        <PriceBanner />
        {/* <Banner /> */}
        <Section1 />
        <Section2 />
        <Section4 />
        <PriceBanner />
        <Section3 />
        <Section5 />
        <Section8 />
        <Caribbeangallery />
        <Ridgewoodform name={"Caribbean"} />
      </div>
    </>
  );
};

export default Caribbean;
