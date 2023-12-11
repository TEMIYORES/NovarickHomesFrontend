import { useEffect } from "react";
import Banner from "../../../components/Banner/Banner";
import PriceBanner from "../../../components/PriceBanner/PriceBanner";
import Buybackform from "../../../components/buybackform/Buybackform";
import "./buyback.scss";
import Faq from "./faq/Faq";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section6 from "./section6/Section6";
import Section7 from "./section7/Section7";
import Section8 from "./section8/Section8";

const Buyback = () => {
  useEffect(() => {
    document.title = "Novarick | buyback";
  });
  return (
    <>
      <div className="buyback">
        <Banner />
        <Section1 />
        <Section2 />
        <PriceBanner />
        <Section3 />
        <Section6 />
        <Section8 />
        <Section7 />
        <Faq />
        <Buybackform />
      </div>
    </>
  );
};

export default Buyback;
