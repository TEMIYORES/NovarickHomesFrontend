import { useEffect } from "react";
import "./ruby2.scss";
// import { Footer, Navbar } from "../../components";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
// import Form from "../../../components/Form/Form";
import Section8 from "./section8/Section8";
import PriceBanner from "../../../components/PriceBanner/PriceBanner";
import Banner from "../../../components/Banner/Banner";
import Rubygallery from "../../../components/RubyGallery/Rubygallery";
import Rubyform from "../../../components/Ruby2form/RubyForm";
import Container from "../../../components/Container";

const Ruby2 = () => {
  useEffect(() => {
    document.title = "Novarick | Ruby2";
  });
  return (
    <>
      <Container>
        <div className="ruby2">
          <Banner />
          <Section1 />
          <Section2 />
          <Section4 />
          <PriceBanner />
          <Section3 />
          <Section5 />
          <Section8 />
          <Rubygallery name={"ruby2"} />
          {/* <RubyTestimonial /> */}
          <Rubyform />
        </div>
      </Container>
    </>
  );
};

export default Ruby2;
