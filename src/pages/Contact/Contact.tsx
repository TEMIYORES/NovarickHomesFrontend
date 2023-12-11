import Section1 from "./section1/Section1";
import { useEffect } from "react";
import "./contact.scss";
import Container from "../../components/Container";
const Contact = () => {
  useEffect(() => {
    document.title = "Novarick | Contact";
  });
  return (
    <>
      <div className="contact">
        <Container>
          <Section1 />
        </Container>
      </div>
    </>
  );
};

export default Contact;
