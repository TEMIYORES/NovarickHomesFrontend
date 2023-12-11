import { Investments } from "../../components/Dropdown/DropdownMenuItems";
import Card from "../../components/Card/Card";
import "./investment.scss";
import Container from "../../components/Container";
const Investment = () => {
  return (
    <Container>
      <div className="investment-section1">
        <div
          className="investment-section1-top"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="investment-section1-top-title">
            Investment
            <br />
          </span>
        </div>
        <div
          className="investment-section1-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          For every project, we ensure standard quality assurance check is
          conducted. We guarantee conservation & recycling of water, electricity
          and waste. Our projects are off-plan to make certain that you are
          involved in every stage, from architectural design, to construction
          and completion.
        </div>
        <div className="investment-section1-bottom">
          <Card projects={Investments} />
        </div>
      </div>
    </Container>
  );
};

export default Investment;
