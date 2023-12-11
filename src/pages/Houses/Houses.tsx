import { House } from "../../components/Dropdown/DropdownMenuItems";
import Card from "../../components/Card/Card";
import "./houses.scss";
import Container from "../../components/Container";
const Houses = () => {
  return (
    <Container>
      <div className="houses-section1">
        <div
          className="houses-section1-top"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="houses-section1-top-title">
            Houses
            <br />
          </span>
        </div>
        <div
          className="houses-section1-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          For every project, we ensure standard quality assurance check is
          conducted. We guarantee conservation & recycling of water, electricity
          and waste. Our projects are off-plan to make certain that you are
          involved in every stage, from architectural design, to construction
          and completion.
        </div>
        <div className="houses-section1-bottom">
          <Card projects={House} />
        </div>
      </div>
    </Container>
  );
};

export default Houses;
