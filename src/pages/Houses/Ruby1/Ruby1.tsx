import { useEffect } from "react";
import "./ruby1.scss";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Banner from "../../../components/Banner/Banner";
import Container from "../../../components/Container";

const Ruby1 = () => {
  useEffect(() => {
    document.title = "Novarick | Ruby1";
  });
  return (
    <>
      <Container>
        <div className="ruby1">
          <Banner />
          <Section1 />
          <Section2 />
        </div>
      </Container>
    </>
  );
};

export default Ruby1;
