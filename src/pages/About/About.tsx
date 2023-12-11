import "./about.scss";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Feature from "../../components/Featured/Feature";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import Testimonials from "../../components/TestimonialCarousel/Carousel";
import Container from "../../components/Container";

const About = () => {
  return (
    <>
      <Container>
        <div className="about">
          <Section1 />
          <Section2 />
          <Section4 />
          <Feature />
          <Section5 />
          <Section3 />
          <Testimonials />
        </div>
      </Container>
    </>
  );
};

export default About;
