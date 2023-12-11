import Container from "../../components/Container";
import Feature from "../../components/Featured/Feature";
import PriceBanner from "../../components/PriceBanner/PriceBanner";
import "./home.scss";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
const Home = () => {
  return (
    <Container>
      <div className="home">
        <Section1 />
        <PriceBanner />
        {/* <Banner /> */}
        <Section2 />
        <Section3 />
        <Section4 />
        <Feature />
        <Section5 />
        {/* <Gallery /> */}
      </div>
    </Container>
  );
};

export default Home;
