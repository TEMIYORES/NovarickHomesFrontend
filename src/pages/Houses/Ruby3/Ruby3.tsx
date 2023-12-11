import { useEffect } from "react";
import "./ruby3.scss";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import Section8 from "./section8/Section8";
import PriceBanner from "../../../components/PriceBanner/PriceBanner";
import Banner from "../../../components/Banner/Banner";
import Rubygallery from "../../../components/RubyGallery/Rubygallery";
import Rubyform from "../../../components/Ruby2form/RubyForm";
import Container from "../../../components/Container";

const Ruby3 = () => {
  useEffect(() => {
    document.title = "Novarick | Ruby3";
  });
  return (
    <>
      <Container>
        <div className="ruby3">
          <Banner />
          <Section1 />
          <Section2 />
          <Section4 />
          <PriceBanner />
          <Section3 />
          <Section5 />
          <Section8 />
          <Rubygallery name={"ruby3"} />
          <Rubyform />
        </div>
      </Container>
    </>
  );
};

export default Ruby3;
