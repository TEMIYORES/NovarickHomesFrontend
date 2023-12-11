import { useEffect } from "react";
import "./ridgewood.scss";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import Section8 from "./section8/Section8";
import PriceBanner from "../../../components/PriceBanner/PriceBanner";
import RubyTestimonial from "../../../components/RubyTestimonial/RubyTestimonial";
import Ridgewoodform from "../../../components/Ridgewoodform/Ridgewoodform";
import Ridgewoodgallery from "../../../components/RidgewoodGallery/Ridgewoodgallery";
import Alafia from "./Alafia/Alafia";

const Ridgewood = () => {
  useEffect(() => {
    document.title = "Novarick | Ridgewood";
  });
  return (
    <>
      <div className="ridgewood">
        <PriceBanner />
        {/* <Banner /> */}
        <Section1 />
        <Section2 />
        <Section4 />
        <PriceBanner />
        <Section3 />
        <Section5 />
        <Alafia />
        <Section8 />
        <Ridgewoodgallery />
        <RubyTestimonial />
        <Ridgewoodform name={"Caribbean"} />
      </div>
    </>
  );
};

export default Ridgewood;
